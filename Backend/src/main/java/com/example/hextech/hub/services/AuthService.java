
package com.example.hextech.hub.services;


import com.example.hextech.hub.entities.Utente;
import com.example.hextech.hub.exceptions.UnauthorizedException;
import com.example.hextech.hub.payloads.LoginDTO;
import com.example.hextech.hub.security.JwtTools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UtenteService utentiService;

    @Autowired
    private JwtTools jwtTools;

    @Autowired
    private PasswordEncoder bcrypt;

    public String checkCredentialsAndGenerateToken(LoginDTO body) {
        Utente found = this.utentiService.findByEmail(body.email());

        if (bcrypt.matches(body.password(), found.getPassword())) {
            return jwtTools.createToken(found);
        } else {
            throw new UnauthorizedException("Credenziali errate!");
        }
    }
}

