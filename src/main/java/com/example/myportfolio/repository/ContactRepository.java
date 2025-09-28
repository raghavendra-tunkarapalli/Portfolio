package com.example.myportfolio.repository;

import com.example.myportfolio.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    
}
