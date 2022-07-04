package com.taskit.app.payloads.requests;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CreateTaskRequest {
    private Long projectId;
    private String title;
    private String description;
    private String priority;
    private Long assignee_id;
}
