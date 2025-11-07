package com.example.hextech.hub.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hextech.hub.exceptions.NotValidException;
import com.example.hextech.hub.payloads.LoginDTO;
import com.example.hextech.hub.payloads.LoginResponseDTO;
import com.example.hextech.hub.services.AuthService;
import com.example.hextech.hub.services.UtenteService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UtenteService utentiService;

    @PostMapping("/login")
    public LoginResponseDTO login(@RequestBody @Validated LoginDTO payload, BindingResult validationResult) {
        if (validationResult.hasErrors()) {
            List<String> errorMessages = validationResult.getFieldErrors().stream().
                    map(fieldError -> fieldError.getField() + " :" + fieldError.getDefaultMessage()).toList();
            throw new NotValidException(errorMessages);
        }
        return new LoginResponseDTO(this.authService.checkCredentialsAndGenerateToken(payload));
    }


}

