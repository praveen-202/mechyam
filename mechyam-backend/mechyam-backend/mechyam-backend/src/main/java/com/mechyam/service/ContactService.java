package com.mechyam.service;

import com.mechyam.dto.ContactRequest;
import com.mechyam.entity.Contact;
import com.mechyam.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {
    
    @Autowired
    private ContactRepository contactRepository;
    
    @Autowired
    private EmailService emailService;
    
    public Contact saveContact(ContactRequest contactRequest) {
        // Validate CAPTCHA (13 - _ = 10, so answer should be 3)
//        if (!isValidCaptcha(contactRequest.getCaptchaAnswer())) {
//            throw new RuntimeException("Invalid CAPTCHA answer");
//        }
        
        Contact contact = new Contact(
            contactRequest.getName(),
            contactRequest.getEmail(),
            contactRequest.getPhoneNumber(),
            contactRequest.getServiceType(),
            contactRequest.getMessage(),
            contactRequest.getCaptchaAnswer()
        );
        
        Contact savedContact = contactRepository.save(contact);
        
        // Send email notification
        try {
            emailService.sendContactNotification(
                contact.getName(),
                contact.getEmail(),
                contact.getPhoneNumber(),
                contact.getServiceType(),
                contact.getMessage()
            );
        } catch (Exception e) {
            // Log email failure but don't fail the contact submission
            System.err.println("Failed to send email notification: " + e.getMessage());
        }
        
        return savedContact;
    }
    
    public List<Contact> getAllContacts() {
        return contactRepository.findAllByOrderBySubmissionDateDesc();
    }
    
    public List<Contact> getContactsByStatus(String status) {
        return contactRepository.findByStatusOrderBySubmissionDateDesc(status);
    }
    
    public Contact getContactById(Long id) {
        return contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found with id: " + id));
    }
    
//    private boolean isValidCaptcha(Integer answer) {
//        // CAPTCHA: 13 - _ = 10, so answer should be 3
//        return answer != null && answer == 3;
//    }
}
