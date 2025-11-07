package com.example.hextech.hub.payloads;

import java.time.LocalDateTime;

public record ErrorsDTO(String message, LocalDateTime timeStamp) {
}
