package com.taskit.app.controllers;

import com.taskit.app.entities.Project;
import com.taskit.app.entities.User;
import com.taskit.app.payloads.requests.CreateProjectRequest;
import com.taskit.app.payloads.responses.MessageResponse;
import com.taskit.app.payloads.responses.ProjectListResponse;
import com.taskit.app.payloads.responses.ProjectResponse;
import com.taskit.app.repositories.ProjectRepository;
import com.taskit.app.repositories.UserRepository;
import com.taskit.app.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @PostMapping("/create")
    public ResponseEntity<?> createProject(@Valid @RequestBody CreateProjectRequest createProjectRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String currentUserName = userDetails.getUsername();

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
    @Transactional
    public ResponseEntity<?> getAllProjects() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String currentUserName = userDetails.getUsername();

        if(!userRepository.existsByUsername(currentUserName)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: user requesting does not exists"));
        }

        User user = userRepository.findByUsername(currentUserName).get();

        Set<Project> projects = user.getProjects();

        List<ProjectResponse> projectList = new ArrayList<>();
        projects.forEach(project -> {
            projectList.add(
                    new ProjectResponse(
                            project.getId(),
                            project.getName(),
                            project.getKeyword(),
                            project.getDescription(),
                            project.getColor(),
                            project.getProjectMembers().size(),
                            project.getProjectManagers().size(),
                            project.getProjectManagers().stream().filter(manager -> manager.getId().equals(user.getId())).findFirst().isPresent()
                    )
            );
        });

        ProjectListResponse projectListResponse = new ProjectListResponse(projectList);

        return ResponseEntity.ok().body(
                projectListResponse
        );

    }
}
