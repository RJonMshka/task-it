package com.taskit.app.repositories;

import com.taskit.app.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

    Boolean existsByKeyword(String keyword);

}
