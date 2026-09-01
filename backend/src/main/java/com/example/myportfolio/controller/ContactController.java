package com.example.myportfolio.controller;

import com.example.myportfolio.model.Contact;
import com.example.myportfolio.repository.ContactRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class ContactController {

    private final ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    // Contact Page
    @GetMapping("/contact")
    public String showForm(Model model) {
        model.addAttribute("contact", new Contact()); // fresh object for empty form
        return "contact";  // contact.html
    }

    // Contact Form Submission
    @PostMapping("/submit")
    public String submitForm(@ModelAttribute Contact contact) {
        contactRepository.save(contact);
        return "success";  // success.html
    }
}
