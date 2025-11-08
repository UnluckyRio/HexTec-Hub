// Script Node per rimuovere commenti in modo sicuro da vari tipi di file
// Supporta: .js, .jsx, .ts, .tsx, .css, .scss, .html, .yml, .yaml, .env
// Evita di rimuovere sequenze come "https://" grazie a uno scanner che rispetta stringhe e template.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const EXCLUDE_DIRS = new Set(['node_modules', '.git', 'dist', 'build']);
const TARGET_EXTS = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.html', '.yml', '.yaml', '.env'
]);

function isTextFile(ext) {
  return TARGET_EXTS.has(ext);
}

function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (EXCLUDE_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, files);
    else if (isTextFile(path.extname(e.name))) files.push(full);
  }
  return files;
}

function stripComments(code, ext) {
  // Linguaggi: JS/TS/JSX/TSX/CSS/SCSS -> rimozione di // e /* */ con rispetto per stringhe/template
  // HTML -> rimozione <!-- ... -->
  // YAML/ENV -> rimozione linee con # (ignorando # dentro stringhe)

  if (ext === '.html') {
    // Rimuovi commenti HTML
    return code.replace(/<!--([\s\S]*?)-->/g, '');
  }

  if (ext === '.yml' || ext === '.yaml' || ext === '.env') {
    return code
      .split(/\r?\n/)
      .map((line) => {
        // Se la linea inizia con # (spazi ignorati), rimuovi
        if (/^\s*#/.test(line)) return '';
        return line;
      })
      .join('\n');
  }

  // Scanner generico per linguaggi tipo C (JS/TS/CSS/SCSS/JSX/TSX)
  let out = '';
  let i = 0;
  const n = code.length;
  let inSingle = false, inDouble = false, inTemplate = false, inRegex = false;

  while (i < n) {
    const ch = code[i];
    const next = i + 1 < n ? code[i + 1] : '';

    // Gestione escape dentro stringhe
    const prev = i > 0 ? code[i - 1] : '';

    // Gestione uscita da regex literal
    if (inRegex) {
      out += ch;
      if (ch === '/' && prev !== '\\') {
        inRegex = false;
      }
      i++;
      continue;
    }

    // Gestione stringhe
    if (inSingle) {
      out += ch;
      if (ch === '\'' && prev !== '\\') inSingle = false;
      i++;
      continue;
    }
    if (inDouble) {
      out += ch;
      if (ch === '"' && prev !== '\\') inDouble = false;
      i++;
      continue;
    }
    if (inTemplate) {
      // Gestisci espressioni ${ ... } mantenendo il contenuto
      out += ch;
      if (ch === '`' && prev !== '\\') inTemplate = false;
      i++;
      continue;
    }

    // Riconosci inizio stringa o template
    if (ch === '\'' && !inDouble && !inTemplate) {
      inSingle = true; out += ch; i++; continue;
    }
    if (ch === '"' && !inSingle && !inTemplate) {
      inDouble = true; out += ch; i++; continue;
    }
    if (ch === '`' && !inSingle && !inDouble) {
      inTemplate = true; out += ch; i++; continue;
    }

    // Riconosci regex literal dopo certe sequenze semplici (euristica)
    if (ch === '/' && next && next !== '/' && next !== '*') {
      // euristica scarna: se prima c’è spazio o caratteri di controllo, potrebbe essere regex
      if (/\s|[=(:\[,]/.test(prev || '')) {
        inRegex = true; out += ch; i++; continue;
      }
    }

    // JSX comment: {/* ... */} -> rimuovi tutto inclusi le graffe
    if (ch === '{' && next === '/' && code[i + 2] === '*' ) {
      // cerca la chiusura "*/}"
      const end = code.indexOf('*/}', i + 3);
      if (end !== -1) { i = end + 3; continue; }
    }

    // Line comment //...
    if (ch === '/' && next === '/') {
      // consuma fino a fine riga
      i += 2;
      while (i < n && code[i] !== '\n') i++;
      continue;
    }

    // Block comment /* ... */
    if (ch === '/' && next === '*') {
      const end = code.indexOf('*/', i + 2);
      if (end === -1) {
        // commento non chiuso: rimuovi fino a fine file
        break;
      } else {
        i = end + 2;
        continue;
      }
    }

    // Altrimenti copia il carattere
    out += ch;
    i++;
  }

  return out;
}

function main() {
  const files = walk(ROOT);
  let changed = 0;
  for (const file of files) {
    const ext = path.extname(file);
    try {
      const src = fs.readFileSync(file, 'utf8');
      const dst = stripComments(src, ext);
      if (dst !== src) {
        fs.writeFileSync(file, dst, 'utf8');
        changed++;
      }
    } catch (e) {
      console.warn('Impossibile elaborare', file, e?.message || e);
    }
  }
  console.log(`Commenti rimossi da ${changed} file.`);
}

if (require.main === module) {
  main();
}