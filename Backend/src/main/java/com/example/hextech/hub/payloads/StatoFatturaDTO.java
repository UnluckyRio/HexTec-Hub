package com.example.hextech.hub.payloads;

import jakarta.validation.constraints.NotBlank;

public record StatoFatturaDTO(
        @NotBlank(message = "Lo stato fattura non può essere vuoto")
        String statoFattura
) {
}
