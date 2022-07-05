package com.taskit.app.controllers;

import com.taskit.app.entities.User;
import com.taskit.app.payloads.responses.MessageResponse;
import com.taskit.app.payloads.responses.UserInfoResponse;
import com.taskit.app.payloads.responses.UserNameResponse;
import com.taskit.app.repositories.UserRepository;
import com.taskit.app.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public ResponseEntity<?> userInfo() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String currentUserName = userDetails.getUsername();

        Optional<User> user = userRepository.findByUsername(currentUserName);

        if(user.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: user not found"));
        }

        User userResult = user.get();

        return ResponseEntity.ok().body(
                new UserNameResponse(
                        userResult.getId(),
                        userResult.getFirstName(),
                        userResult.getLastName()
                )
        );
    }

    @GetMapping("/details")
    public ResponseEntity<?> userDetails() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String currentUserName = userDetails.getUsername();

        Optional<User> user = userRepository.findByUsername(currentUserName);

        if(user.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: user not found"));
        }

        User userResult = user.get();

        return ResponseEntity.ok().body(
                new UserInfoResponse(
                        userResult.getId(),
                        userResult.getUsername(),
                        userResult.getEmail(),
                        userResult.getFirstName(),
                        userResult.getLastName(),
                        userResult.getRoles().stream().map(role -> role.getName()).collect(Collectors.toList())
                )
        );
    }
}
