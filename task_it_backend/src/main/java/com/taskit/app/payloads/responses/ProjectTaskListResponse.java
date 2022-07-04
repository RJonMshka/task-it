package com.taskit.app.payloads.responses;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ProjectTaskListResponse {
    Boolean isProjectOwned;
    List<ProjectTaskResponse> projectTaskResponses;
}
