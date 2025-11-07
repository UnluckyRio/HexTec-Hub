package com.example.hextech.hub.payloads;

import java.time.LocalDateTime;
import java.util.List;

public record ErrorsWithListDTO(String message, LocalDateTime timeStamp, List<String> errorMessages) {
}
