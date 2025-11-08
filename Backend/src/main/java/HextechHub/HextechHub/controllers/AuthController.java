package HextechHub.HextechHub.controllers;

import HextechHub.HextechHub.entities.Role;
import HextechHub.HextechHub.entities.User;
import HextechHub.HextechHub.exceptions.BadRequestException;
import HextechHub.HextechHub.exceptions.DuplicateResourceException;
import HextechHub.HextechHub.exceptions.ResourceNotFoundException;
import HextechHub.HextechHub.payloads.JwtResponse;
import HextechHub.HextechHub.payloads.LoginRequest;
import HextechHub.HextechHub.payloads.RegisterRequest;
import HextechHub.HextechHub.repositories.UserRepository;
import HextechHub.HextechHub.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashSet;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtTokenProvider.generateToken(authentication);
        User user = userRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("Utente non trovato"));

        return ResponseEntity.ok(new JwtResponse(jwt,
                user.getId(),
                user.getNome(),
                user.getCognome(),
                user.getEmail(),
                user.getRiotId()));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new DuplicateResourceException("Email già in uso");
        }

        if (userRepository.existsByRiotId(registerRequest.getRiotId())) {
            throw new DuplicateResourceException("Riot ID già in uso");
        }

        if (registerRequest.getPassword() == null || registerRequest.getPassword().trim().isEmpty()) {
            throw new BadRequestException("La password non può essere vuota");
        }

        User user = new User();
        user.setNome(registerRequest.getNome());
        user.setCognome(registerRequest.getCognome());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(encoder.encode(registerRequest.getPassword()));
        user.setRiotId(registerRequest.getRiotId());

        // Se è il primo utente, renderlo admin
        if (userRepository.count() == 0) {
            user.setRoles(new HashSet<>(Collections.singleton(Role.ROLE_ADMIN.name())));
        } else {
            user.setRoles(new HashSet<>(Collections.singleton(Role.ROLE_USER.name())));
        }

        userRepository.save(user);

        return ResponseEntity.ok("Utente registrato con successo");
    }

    @PostMapping("/promote")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<?> promoteToAdmin(@RequestParam String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Utente non trovato"));

        if (user.getRoles().contains(Role.ROLE_ADMIN.name())) {
            throw new BadRequestException("L'utente è già un amministratore");
        }

        user.getRoles().add(Role.ROLE_ADMIN.name());
        userRepository.save(user);

        return ResponseEntity.ok("Utente promosso ad amministratore con successo");
    }

    @PostMapping("/demote")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<?> demoteToUser(@RequestParam String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Utente non trovato"));

        long adminCount = userRepository.findAll().stream()
                .filter(u -> u.getRoles().contains(Role.ROLE_ADMIN.name()))
                .count();

        if (adminCount <= 1 && user.getRoles().contains(Role.ROLE_ADMIN.name())) {
            throw new BadRequestException("Impossibile declassare l'ultimo amministratore");
        }

        user.getRoles().remove(Role.ROLE_ADMIN.name());
        user.getRoles().add(Role.ROLE_USER.name());
        userRepository.save(user);

        return ResponseEntity.ok("Utente declassato a utente normale con successo");
    }
}
