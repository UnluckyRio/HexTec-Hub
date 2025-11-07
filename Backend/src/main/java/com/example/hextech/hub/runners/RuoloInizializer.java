
package com.example.hextech.hub.runners;


import com.example.hextech.hub.entities.Ruolo;
import com.example.hextech.hub.entities.RuoloUtente;
import com.example.hextech.hub.repositories.RuoloUtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(1)
public class RuoloInizializer implements CommandLineRunner {
    @Autowired
    private RuoloUtenteRepository ruoloUtenteRepository;
    @Override
    public void run(String... args) throws Exception {
        for (Ruolo ruolo : Ruolo.values()) {
            ruoloUtenteRepository.findByRuoloUtente(ruolo).orElseGet(() -> {
                RuoloUtente newRuolo = new RuoloUtente();
                newRuolo.setRuoloUtente(ruolo);
                return ruoloUtenteRepository.save(newRuolo);
            });
        }
    }
}
