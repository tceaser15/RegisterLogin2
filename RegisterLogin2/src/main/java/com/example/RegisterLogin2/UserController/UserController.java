package com.example.RegisterLogin2.UserController;


// import com.example.RegisterLogin2.Dto.BookDTO;
import com.example.RegisterLogin2.Dto.LoginDTO;
import com.example.RegisterLogin2.Dto.UserDTO;
import com.example.RegisterLogin2.Dto.UserResponseDTO;
import com.example.RegisterLogin2.Response.LoginResponse;
import com.example.RegisterLogin2.Service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/user")
//@AllArgsConstructor
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    @CrossOrigin("*")
    public ResponseEntity<UserResponseDTO> saveUser(@RequestBody UserDTO userDTO)

    {
        UserResponseDTO user = userService.addUser(userDTO);
        return ResponseEntity.ok(user);

    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
        try {
            UserResponseDTO userResponseDTO = userService.loginuser(loginDTO);
            // Handle successful login
            return ResponseEntity.ok(userResponseDTO);
        } catch (IllegalArgumentException e) {
            // Handle invalid password or user not found
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    @GetMapping("/health")
    public String healthCheck() {
        return "Application is up and running!";
    }

    //  @PostMapping("/addToFavorites")
    // public ResponseEntity<String> addToFavorites(@RequestParam String userId, @RequestBody BookDTO bookDTO) {
    //     try {
    //         // Call a service method to add the book to the user's favorites
    //         userService.addToFavorites(userId, bookDTO);
    //         return ResponseEntity.ok("Book added to favorites successfully");
    //     } catch (Exception e) {
    //         // Handle errors, e.g., user not found, book not found, or other issues
    //         return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    //     }
    // }

}
