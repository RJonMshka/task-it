package com.taskit.app.controllers;

import com.taskit.app.entities.Project;
import com.taskit.app.entities.Task;
import com.taskit.app.entities.User;
import com.taskit.app.mappers.TaskPriorityMapper;
import com.taskit.app.mappers.TaskStatusMapper;
import com.taskit.app.payloads.requests.CreateTaskRequest;
import com.taskit.app.payloads.responses.*;
import com.taskit.app.repositories.ProjectRepository;
import com.taskit.app.repositories.TaskRepository;
import com.taskit.app.repositories.UserRepository;
import com.taskit.app.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private TaskRepository taskRepository;

    @PostMapping("/create")
    public ResponseEntity<?> createTask(@Valid @RequestBody CreateTaskRequest createTaskRequest) {
        // get the current user
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String currentUserName = userDetails.getUsername();
        Optional<User> user = userRepository.findByUsername(currentUserName);

        if(user.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: user requesting does not exists"));
        }

        Long projectId = createTaskRequest.getProjectId();

        if(!projectRepository.existsById(projectId)) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: project with id " + projectId + " does not exists. Hence cannot add a task."));
        }

        Set<Project> ownedProjects = user.get().getOwnedProjects();
        Optional<Project> matchingProject = ownedProjects.stream().filter(project -> project.getId().equals(projectId)).findFirst();

        if(matchingProject.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: user does not have authority to create a task in this project"));
        }

        if(!userRepository.existsById(createTaskRequest.getAssignee_id())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: assigned user does not exist."));
        }

        Integer priority = TaskPriorityMapper.getPriorityValueFromName(createTaskRequest.getPriority());
        if(priority == null) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: incorrect priority."));
        }

        Task task = new Task();
        task.setAssignee(createTaskRequest.getAssignee_id());
        task.setDescription(createTaskRequest.getDescription());
        task.setPriority(priority);
        task.setStatus(1);
        task.setTitle(createTaskRequest.getTitle());
        task.setProjectId(matchingProject.get().getId());

        taskRepository.save(task);

        return ResponseEntity.ok().body(
                new MessageResponse("Task successfully created")
        );

    }

    @GetMapping("/my_tasks")
    public ResponseEntity<?> getTaskForCurrentUser() {
        // get the current user
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String currentUserName = userDetails.getUsername();

        Optional<User> user = userRepository.findByUsername(currentUserName);

        if(user.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: user requesting does not exists"));
        }

        Set<Task> userTasks = user.get().getTasks();
        List<TaskResponse> taskList = new ArrayList<>();

        userTasks.forEach(task -> taskList.add(new TaskResponse(
                task.getId(),
                task.getTitle(),
                projectRepository.findById(task.getProjectId()).get().getKeyword(),
                TaskPriorityMapper.getPriorityNameFromValue(task.getPriority()),
                userRepository.findById(task.getAssignee()).get().getFirstName(),
                TaskStatusMapper.getStatusNameFromValue(task.getStatus())
        )));

        return ResponseEntity.ok().body(
                new TaskListResponse(taskList)
        );
    }

    @GetMapping("/project_tasks")
    public ResponseEntity<?> getProjectTasks(@RequestParam Optional<String> pid) {
        if(pid.isEmpty()) {
            return ResponseEntity.badRequest().body(
                    new MessageResponse("Error: project id param is not specified")
            );
        }

        Long projectId = Long.parseLong(pid.get());

        Optional<Project> project = projectRepository.findById(projectId);

        if(project.isEmpty()) {
            return ResponseEntity.badRequest().body(
                    new MessageResponse("Error: project not found.")
            );
        }

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String currentUserName = userDetails.getUsername();

        Optional<User> user = userRepository.findByUsername(currentUserName);

        if(user.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: user requesting does not exists."));
        }

//        if (user.get().getOwnedProjects().stream().filter(ownedProject -> ownedProject.getId().equals(projectId)).findFirst().isEmpty()) {
//            return ResponseEntity.badRequest().body(new MessageResponse("Error: Project not owned by user, permission denied to "));
//        }
        if(project.get().getProjectMembers().stream().filter(member -> member.getId().equals(user.get().getId())).findFirst().isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: user does not belong to the project specified."));
        }

        List<ProjectTaskResponse> projectTaskResponses = new ArrayList<>();

        project.get().getTasks().forEach(task -> projectTaskResponses.add(new ProjectTaskResponse(
                task.getId(),
                task.getTitle(),
                TaskPriorityMapper.getPriorityNameFromValue(task.getPriority()),
                TaskStatusMapper.getStatusNameFromValue(task.getStatus())
        )));

        return ResponseEntity.ok().body(
                new ProjectTaskListResponse(
                        project.get().getProjectManagers().stream().filter(manager -> manager.getId().equals(user.get().getId())).findFirst().isPresent(),
                        projectTaskResponses
                )
        );
    }
}
