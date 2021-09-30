package com.techgeeknext.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.techgeeknext.model.UserEntity;



@Repository("userRepo")
public interface UserRepo extends CrudRepository<UserEntity, String> {

    UserEntity findByEmailIgnoreCase(String email);

}