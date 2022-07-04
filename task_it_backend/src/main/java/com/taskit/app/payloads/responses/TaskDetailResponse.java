package com.taskit.app.payloads.responses;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TaskDetailResponse {
    private Long id;
    private String title;
    private Long projectId;
    private String projectKeyword;
    private String priority;
    private String description;
    private Long assignee;
    private String assigneeFirstName;
    private String status;
}
