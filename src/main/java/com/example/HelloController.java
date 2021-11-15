package com.example;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/")
public class HelloController {

    @RequestMapping()
    public String index() {
        return "hello-" + System.currentTimeMillis();
    }

    @DeleteMapping()
    public String delete() {
        return "delete-" + System.currentTimeMillis();
    }

}
