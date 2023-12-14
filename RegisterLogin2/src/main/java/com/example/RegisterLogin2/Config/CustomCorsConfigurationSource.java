//package com.example.RegisterLogin2.Config;
//
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.List;
//
//public class CustomCorsConfigurationSource extends UrlBasedCorsConfigurationSource {
//    CorsConfiguration config = new CorsConfiguration();
//        config.setAllowedOrigins(List.of("http://localhost:3000"));
//        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
//        config.setAllowedHeaders(List.of("*"));
//
//    // You can customize other CORS properties here
//
//    // Apply the CORS configuration for all paths
//    registerCorsConfiguration("/**", config);
//}
