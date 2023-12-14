package com.example.RegisterLogin2.Service;

import com.example.RegisterLogin2.Dto.LoginDTO;
import com.example.RegisterLogin2.Dto.UserDTO;
import com.example.RegisterLogin2.Dto.UserResponseDTO;
import com.example.RegisterLogin2.Response.LoginResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    UserResponseDTO addUser(UserDTO userDTO);

    UserResponseDTO loginuser(LoginDTO loginDTO);
}
