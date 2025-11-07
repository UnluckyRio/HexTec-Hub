package com.example.hextech.hub.controllers;


import com.example.hextech.hub.entities.Ruolo;
import com.example.hextech.hub.entities.Utente;
import com.example.hextech.hub.exceptions.NotValidException;
import com.example.hextech.hub.payloads.UpdateRuoloDTO;
import com.example.hextech.hub.payloads.UtenteDTO;
import com.example.hextech.hub.services.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private UtenteService utenteService;

    @PostMapping("/users/{id}/role")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Utente updateUserRole(@PathVariable Long id, @RequestBody UpdateRuoloDTO body) {
        return utenteService.udpdateRuolo(id, body.ruolo());
    }

    @PostMapping("/register")
    @PreAuthorize("hasAuthority('ADMIN')")
    @ResponseStatus(HttpStatus.CREATED)
    public Utente save(@RequestBody @Validated UtenteDTO body, BindingResult validationResult) {
        if (validationResult.hasErrors()) {
            List<String> errorMessages = validationResult.getFieldErrors().stream().
                    map(fieldError -> fieldError.getField() + " :" + fieldError.getDefaultMessage()).toList();
            throw new NotValidException(errorMessages);
        }

        return this.utenteService.saveUtenteUser(body, Ruolo.USER);
    }
}