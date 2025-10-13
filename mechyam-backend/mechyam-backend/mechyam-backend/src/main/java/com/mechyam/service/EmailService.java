package com.mechyam.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    
    @Autowired
    private JavaMailSender mailSender;
    
    @Value("${app.manager.email}")
    private String managerEmail;
    
    @Value("${app.email.subject.prefix}")
    private String emailSubjectPrefix;
    
    public void sendContactNotification(String name, String email, String phone, 
                                      String service, String message) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(managerEmail);
        mailMessage.setSubject(emailSubjectPrefix + " New Contact Form Submission");
        mailMessage.setText(createEmailContent(name, email, phone, service, message));
        
        mailSender.send(mailMessage);
    }
    
    private String createEmailContent(String name, String email, String phone, 
                                    String service, String message) {
        return String.format(
            "New Contact Form Submission Received:\n\n" +
            "Name: %s\n" +
            "Email: %s\n" +
            "Phone: %s\n" +
            "Service: %s\n" +
            "Message: %s\n\n" +
            "This message was sent automatically from Mechyam Contact System.",
            name, email, phone != null ? phone : "Not provided", 
            service != null ? service : "Not specified", message
        );
        
    }
    
    // i have added these for jobApplictions
 // Add these methods to your existing EmailService class

    public void sendJobApplicationNotification(String jobTitle, String applicantName, 
                                             String applicantEmail, String applicantPhone) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(managerEmail);
        mailMessage.setSubject(emailSubjectPrefix + " New Job Application - " + jobTitle);
        mailMessage.setText(createJobApplicationEmailContent(jobTitle, applicantName, applicantEmail, applicantPhone));
        
        mailSender.send(mailMessage);
    }

    private String createJobApplicationEmailContent(String jobTitle, String applicantName, 
                                                  String applicantEmail, String applicantPhone) {
        return String.format(
            "New Job Application Received:\n\n" +
            "Job Position: %s\n" +
            "Applicant Name: %s\n" +
            "Email: %s\n" +
            "Phone: %s\n\n" +
            "Please check the admin portal for more details and to download the resume.\n\n" +
            "This message was sent automatically from Mechyam Career System.",
            jobTitle, applicantName, applicantEmail, applicantPhone != null ? applicantPhone : "Not provided"
        );
    }
}