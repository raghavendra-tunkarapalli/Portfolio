package com.example.myportfolio.controller;

import com.example.myportfolio.model.Contact;
import com.example.myportfolio.repository.ContactRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ContactRestController {

    private final ContactRepository contactRepository;

    public ContactRestController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, Object>> submitContact(@Valid @RequestBody Contact contact) {
        Contact savedContact = contactRepository.save(contact);
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Thank you, " + savedContact.getName() + "! Your message has been saved.");
        response.put("data", savedContact);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
