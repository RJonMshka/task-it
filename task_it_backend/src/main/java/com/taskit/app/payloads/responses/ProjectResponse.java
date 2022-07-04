package com.taskit.app.payloads.responses;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProjectResponse {
    private Long id;
    private String name;
    private String keyword;
    private String description;
    private String color;
    private Integer projectMemberCount;
    private Integer projectManagerCount;
    private Boolean isProjectOwned;
}
