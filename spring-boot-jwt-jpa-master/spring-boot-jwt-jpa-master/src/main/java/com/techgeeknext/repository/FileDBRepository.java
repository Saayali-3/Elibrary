package com.techgeeknext.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techgeeknext.model.FileDB;


@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {

}
