package com.taskit.app.payloads.responses;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProjectTaskResponse {
    private Long id;
    private String title;
    private String priority;
    private String status;
}
