package com.example.hextec.hub.auth;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;


@Component
public class AuthFilter extends OncePerRequestFilter {

    @Autowired
    JWTTools jwt;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException, UnauthorizedException {
        String authToken = request.getHeader("Authorization");
        if (authToken == null || !authToken.startsWith("Bearer")) {
            throw new UnauthorizedException("Token missing or invalid");
        }

        String token = authToken.substring(7);
        jwt.verifyToken(token);

        filterChain.doFilter(request, response);
    }

    protected boolean shouldNotFilter(HttpServletRequest req) {
        return new AntPathMatcher().match(pattern: "/users/login", req.getServletPath());
    }
}

