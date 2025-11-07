package com.example.hextech.hub.repositories;



import com.example.hextech.hub.entities.Utente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Utente, Long> {
}
