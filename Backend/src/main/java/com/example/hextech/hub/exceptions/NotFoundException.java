package com.example.hextech.hub.exceptions;

public class NotFoundException extends RuntimeException {
    public NotFoundException(Long id) {
        super("Risorsa con id " + id + " non trovata");
    }

    public NotFoundException(String message) {
        super(message);
    }
}
