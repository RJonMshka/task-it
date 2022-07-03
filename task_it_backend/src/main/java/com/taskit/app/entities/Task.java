package com.taskit.app.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Data
@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    @Size(max = 50)
    @NotNull
    private String title;

    @Column(name = "project_id")
    private Long projectId;

    @Column(name = "priority")
    private Integer priority;

    @Column(name = "description")
    private String description;

    @Column(name = "assignee")
    private Long userId;
}
