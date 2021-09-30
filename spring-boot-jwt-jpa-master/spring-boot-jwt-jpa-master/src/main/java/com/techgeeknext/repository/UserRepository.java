package com.techgeeknext.repository;
import com.techgeeknext.model.UserDao;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserDao, Long> {
    UserDao findByUsername(String username);

    

}