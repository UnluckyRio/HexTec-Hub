package com.example.hextech.hub.services;



import com.example.hextech.hub.entities.Utente;
import com.example.hextech.hub.exceptions.NotFoundException;
import com.example.hextech.hub.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository repo;

    
    public Utente findById(Long id) {
        return this.repo.findById(id).orElseThrow(() -> new NotFoundException(id));
    }
}
