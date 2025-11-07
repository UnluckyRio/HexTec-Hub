package com.example.hextech.hub.auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.UUID;

@Component
public class JWTTools {
    @Value("spring.jwt.secret")
    String secret;

    public void verifyToken(String token) throws UnauthorizedException {
        try {
            Jwts.parserBuilder().setSigningKey(Keys.hmacShaKeyFor(secret.getBytes())).build().parse(token);
        } catch (Exception err) {
            throw new UnauthorizedException("Invalid token");
        }

    }

    public String decodeToken(String token) {
        return Jwts.parserBuilder().setSigningKey(Keys.hmacShaKeyFor(secret.getBytes())).build().parseClaimsJws(token).getBody().getSubject();
    }

    public String createToken(UUID id) {
        return Jwts.builder()
                .setSubject(id.toString())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24)) // 1 day
                .signWith(Keys.hmacShaKey(secret.getBytes()))
                .compact();
    }
}
