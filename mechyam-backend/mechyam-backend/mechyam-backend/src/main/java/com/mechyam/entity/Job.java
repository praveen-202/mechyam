package com.mechyam.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "JOBS")
public class Job {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "job_seq")
    @SequenceGenerator(name = "job_seq", sequenceName = "JOB_SEQ", allocationSize = 1)
    private Long id;
    
    @Column(name = "JOB_TITLE", nullable = false)
    private String jobTitle;
    
    @Column(name = "DEPARTMENT")
    private String department;
    
    @Column(name = "LOCATION")
    private String location;
    
    @Column(name = "JOB_TYPE") // FULL_TIME, PART_TIME, CONTRACT
    private String jobType;
    
    @Column(name = "EXPERIENCE_LEVEL") // ENTRY, MID, SENIOR
    private String experienceLevel;
    
    @Column(name = "DESCRIPTION", length = 4000)
    private String description;
    
    @Column(name = "REQUIREMENTS", length = 4000)
    private String requirements;
    
    @Column(name = "RESPONSIBILITIES", length = 4000)
    private String responsibilities;
    
    @Column(name = "SALARY_RANGE")
    private String salaryRange;
    
    @Column(name = "IS_ACTIVE")
    private Boolean isActive;
    
    @Column(name = "POSTED_DATE")
    private LocalDateTime postedDate;
    
    @Column(name = "CLOSING_DATE")
    private LocalDateTime closingDate;
    
    @OneToMany(mappedBy = "job", cascade = CascadeType.ALL)
    private List<JobApplication> applications;
    
    // Constructors
    public Job() {
        this.postedDate = LocalDateTime.now();
        this.isActive = true;
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getJobTitle() { return jobTitle; }
    public void setJobTitle(String jobTitle) { this.jobTitle = jobTitle; }
    
    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }
    
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    
    public String getJobType() { return jobType; }
    public void setJobType(String jobType) { this.jobType = jobType; }
    
    public String getExperienceLevel() { return experienceLevel; }
    public void setExperienceLevel(String experienceLevel) { this.experienceLevel = experienceLevel; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public String getRequirements() { return requirements; }
    public void setRequirements(String requirements) { this.requirements = requirements; }
    
    public String getResponsibilities() { return responsibilities; }
    public void setResponsibilities(String responsibilities) { this.responsibilities = responsibilities; }
    
    public String getSalaryRange() { return salaryRange; }
    public void setSalaryRange(String salaryRange) { this.salaryRange = salaryRange; }
    
    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }
    
    public LocalDateTime getPostedDate() { return postedDate; }
    public void setPostedDate(LocalDateTime postedDate) { this.postedDate = postedDate; }
    
    public LocalDateTime getClosingDate() { return closingDate; }
    public void setClosingDate(LocalDateTime closingDate) { this.closingDate = closingDate; }
    
    public List<JobApplication> getApplications() { return applications; }
    public void setApplications(List<JobApplication> applications) { this.applications = applications; }
}