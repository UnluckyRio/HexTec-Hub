package com.example.hextech.hub.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "ruolo_utente")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class RuoloUtente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true)
    private Ruolo ruoloUtente;
}
