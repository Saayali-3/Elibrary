package com.techgeeknext.repository;
import com.techgeeknext.model.UserEntity;

import org.springframework.data.repository.CrudRepository;
public interface UserRepository extends CrudRepository<UserEntity, Integer> {
	UserEntity findByEmailIdIgnoreCase(String emailId);
}