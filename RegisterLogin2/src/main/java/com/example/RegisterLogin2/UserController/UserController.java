package com.example.RegisterLogin2.UserController;


import com.example.RegisterLogin2.Dto.LoginDTO;
import com.example.RegisterLogin2.Dto.UserDTO;
import com.example.RegisterLogin2.Response.LoginResponse;
import com.example.RegisterLogin2.Service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/user")
@AllArgsConstructor
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(path = "/save")
    public String saveUser(@RequestBody UserDTO userDTO)
    {
        return userService.addUser(userDTO);

    }

    @PostMapping(path = "/login")
    public LoginResponse loginUser(@RequestBody LoginDTO loginDTO)
    {
        return userService.loginuser(loginDTO);
    }

    @GetMapping("/health")
    public String healthCheck() {
        return "Application is up and running!";
    }


}
