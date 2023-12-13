package com.example.RegisterLogin2.Service.impl;

import com.example.RegisterLogin2.Dto.LoginDTO;
import com.example.RegisterLogin2.Dto.UserDTO;
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
    public String addUser(UserDTO userDTO) {

        User user = new User(

                userDTO.getUserid(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                userDTO.getPassword()
        );

        userRepo.save(user);
        return "User created";
    }

//    @Override
    public LoginResponse loginuser(LoginDTO loginDTO) {
        String msg = "";
        User user1 = userRepo.findByEmail(loginDTO.getEmail());
        if (user1.getPassword().equals(loginDTO.getPassword())) {
            return new LoginResponse("Success",true);
        }
        return new LoginResponse("Failed", false);
//        if (user1 != null) {
//            String password = loginDTO.getPassword();
//            String encodedPassword = user1.getPassword();
//            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
//            if (isPwdRight) {
//                Optional<User> user = userRepo.findOneByEmailandPassword(loginDTO.getEmail(), encodedPassword);
//                if (user.isPresent()){
//                    return new LoginResponse("Login Success", true);
//                } else {
//                    return new LoginResponse("Login Failed" , false);
//                }
//            } else {
//                return new LoginResponse("password Not Match", false);
//            }
//        } else {
//            return new LoginResponse("Email does not exist", false);
//      }
//        return null;
    }
}
