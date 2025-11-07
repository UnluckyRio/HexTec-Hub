package com.example.hextec.hub.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired UserRepository repo;

    public User FindById(UUID id) throws NotFoundException {
        return  this.repo.findById(id).orElseThrow() -> new NotFoundException(id));
    }
}
