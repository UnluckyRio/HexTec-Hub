package com.example.hextech.hub.services;

import com.example.hextech.hub.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository repo;

    public User FindById(UUID id) throws NotFoundException {
        return  this.repo.findById(id).orElseThrow() -> new NotFoundException(id));
    }
}
