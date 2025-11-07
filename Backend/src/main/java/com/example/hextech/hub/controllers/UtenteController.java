package com.example.hextech.hub.controllers;


import com.example.hextech.hub.entities.Utente;
import com.example.hextech.hub.services.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/utenti")
public class UtenteController {
    @Autowired
    private UtenteService utenteService;

    @PatchMapping("/{id}")
    public Utente udpdateImg(@RequestParam("avatar") MultipartFile file, @PathVariable Long id) {
        return utenteService.findByIdAndUpImg(id, file);
    }
}
