
package com.example.hextech.hub.repositories;


import com.example.hextech.hub.entities.Ruolo;
import com.example.hextech.hub.entities.RuoloUtente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RuoloUtenteRepository extends JpaRepository<RuoloUtente, Long> {
    Optional<RuoloUtente> findByRuoloUtente(Ruolo ruolo);
}

