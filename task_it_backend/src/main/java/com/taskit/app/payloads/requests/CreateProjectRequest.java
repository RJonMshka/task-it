package com.taskit.app.payloads.requests;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
public class CreateProjectRequest {
    @Size(max = 10)
    @NotBlank
    private String keyword;

    @NotBlank
    @Size(max = 50)
    private String name;

    @Size(max = 500)
    private String description;

    @Size(max = 20)
    @Value("${projects.defaults.color}")
    private String color;
}
