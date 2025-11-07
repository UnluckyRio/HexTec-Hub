package com.example.hextec.hub.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.UUID;

@Override
public Collection<? extends GrantedAuthority> getAuthorities() {
    return null;
}

@Getter
@Entity
public class User implements UserDetails {
    @Id
    @GeneratedValue
    UUID id;
    String name;
    String surname;
    String RiotID;
    String email;
    String password;
    String role;

}
