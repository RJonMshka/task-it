package com.taskit.app.controllers;

import com.taskit.app.entities.Project;
import com.taskit.app.entities.User;
import com.taskit.app.payloads.requests.CreateProjectRequest;
import com.taskit.app.payloads.responses.MessageResponse;
import com.taskit.app.repositories.ProjectRepository;
import com.taskit.app.repositories.UserRepository;
import com.taskit.app.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping("/test")
    public ResponseEntity<?> testProjects() {
        return ResponseEntity.ok().body(projectRepository.findAll());
    }

    @PostMapping("/create")
    public ResponseEntity<?> createProject(@Valid @RequestBody CreateProjectRequest createProjectRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String currentUserName = userDetails.getUsername();

        SecurityContextHolder.getContext().setAuthentication(authentication);

        if(!userRepository.existsByUsername(currentUserName)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: cannot create project for this user"));
        }

        if(projectRepository.existsByKeyword(createProjectRequest.getKeyword())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: project with keyword " + createProjectRequest.getKeyword() + " already exists, use a different name"));
        }

        // get the user who created the project
        User user = userRepository.findByUsername(currentUserName).get();

        // create a set and the user who created the project to it
        Set<User> projectMembers = new HashSet<>();
        projectMembers.add(user);

        // create the project
        Project project = new Project();

        project.setName(createProjectRequest.getName());
        project.setKeyword(createProjectRequest.getKeyword());
        project.setDescription(createProjectRequest.getDescription());
        project.setColor(createProjectRequest.getColor());
        project.setProjectManagers(projectMembers);
        project.setProjectMembers(projectMembers);

        projectRepository.save(project);

        return ResponseEntity
                .ok()
                .body(new MessageResponse(
                        "Project " + createProjectRequest.getKeyword() + " created successfully for user " + currentUserName
                    )
                );
    }

    @GetMapping("/list_projects")
    public ResponseEntity<?> getAllProjects() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String currentUserName = userDetails.getUsername();

        SecurityContextHolder.getContext().setAuthentication(authentication);

        if(!userRepository.existsByUsername(currentUserName)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: user requesting does not exists"));
        }

        User user = userRepository.findByUsername(currentUserName).get();

        Set<Project> projects = user.getProjects();



        return ResponseEntity.ok().body(
                new MessageResponse("Nothing much")
        );

    }
}
