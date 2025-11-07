package com.example.hextech.hub.controllers;

import com.example.hextech.hub.services.UserService;
import com.example.hextech.hub.security.JWTTools;
import com.example.hextech.hub.exceptions.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService srv;
    @Autowired
    JWTTools jwt;
    @PostMapping("/login")
    public String login(@RequestBody loginDTO body) {
        User user = this.srv.findByEmail(body.email());
        if ((user.getPassword().equals(body.password())) {
            return jwt.createToken(user.getId());
        } else {
            throw new BadRequestException("Invalid credentials");
        }
    }
}
