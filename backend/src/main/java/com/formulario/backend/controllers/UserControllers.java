package com.formulario.backend.controllers;
import com.formulario.backend.models.User;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserControllers {

    @PostMapping("/post")
    public User makePost(@RequestBody User user){
        return user;
    }
}
