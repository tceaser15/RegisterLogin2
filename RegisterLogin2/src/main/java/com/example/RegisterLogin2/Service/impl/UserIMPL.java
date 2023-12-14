package com.example.RegisterLogin2.Service.impl;

import com.example.RegisterLogin2.Dto.LoginDTO;
import com.example.RegisterLogin2.Dto.UserDTO;
import com.example.RegisterLogin2.Dto.UserResponseDTO;
import com.example.RegisterLogin2.Entity.User;
import com.example.RegisterLogin2.Repo.UserRepo;
import com.example.RegisterLogin2.Response.LoginResponse;
//import com.example.RegisterLogin2.Service.UserService;
import com.example.RegisterLogin2.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserIMPL implements UserService {
    @Autowired
    private UserRepo userRepo;

//    @Autowired
//    private PasswordEncoder passwordEncoder;

//    @Override
    public UserResponseDTO addUser(UserDTO userDTO) {

        User user = new User(

                userDTO.getUserid(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                userDTO.getPassword()
        );

        userRepo.save(user);

        return new UserResponseDTO(
                userDTO.getUsername(),
                userDTO.getEmail()
        );
    }

//    @Override

    public UserResponseDTO loginuser(LoginDTO loginDTO) {
        Optional<User> optionalUser = Optional.ofNullable(userRepo.findByEmail(loginDTO.getEmail()));

        return optionalUser.map(user -> {
            if (user.getPassword().equals(loginDTO.getPassword())) {
                return new UserResponseDTO(user.getUsername(), user.getEmail());
            } else {
                throw new IllegalArgumentException("Invalid password");
            }
        }).orElseThrow(() -> new IllegalArgumentException("User not found"));
    }
}
