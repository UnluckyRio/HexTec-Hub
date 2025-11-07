package com.example.hextech.hub.controllers;



import com.example.hextech.hub.payloads.LoginDTO;
import com.example.hextech.hub.payloads.LoginResponseDTO;
import com.example.hextech.hub.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private AuthService authService; 

    @PostMapping("/login")
    public LoginResponseDTO login(@RequestBody @Validated LoginDTO body) {
        
        String token = authService.checkCredentialsAndGenerateToken(body);
        return new LoginResponseDTO(token);
    }
}
