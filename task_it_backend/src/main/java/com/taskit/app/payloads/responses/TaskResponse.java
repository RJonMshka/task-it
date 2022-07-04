package com.taskit.app.payloads.responses;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
public class TaskResponse {
    private Long id;
    private String title;
    private String projectKeyword;
    private String priority;
    private String assigneeFirstName;
    private String status;
}
