package com.example.RegisterLogin2.Repo;


import com.example.RegisterLogin2.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository

public interface UserRepo extends JpaRepository<User,Integer> {

    //default Optional<User> findOneByEmailandPassword(String email, String password) {
//        return Optional.empty();
//    }

    User findByEmail(String email);



}
