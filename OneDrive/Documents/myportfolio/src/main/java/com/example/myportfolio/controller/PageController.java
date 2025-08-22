package com.example.myportfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/")
    public String home() {
        return "index";  // index.html
    }

    @GetMapping("/about")
    public String about() {
        return "about";  // about.html
    }

    @GetMapping("/project")
    public String project() {
        return "project";  // project.html
    }

    @GetMapping("/resume")
    public String resume() {
        return "resume";  // resume.html
    }
}
