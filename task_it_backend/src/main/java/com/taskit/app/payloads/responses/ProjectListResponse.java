package com.taskit.app.payloads.responses;

import com.taskit.app.entities.Project;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ProjectListResponse {
    List<ProjectResponse> projectList;
}
