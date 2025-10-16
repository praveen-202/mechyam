package com.mechyam.service;

import com.mechyam.entity.Job;
import com.mechyam.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {
    
    @Autowired
    private JobRepository jobRepository;
    
    public List<Job> getAllActiveJobs() {
        return jobRepository.findByIsActiveTrueOrderByPostedDateDesc();
    }
    
    public List<Job> getJobsByDepartment(String department) {
        return jobRepository.findByDepartmentAndIsActiveTrue(department);
    }
    
    public List<Job> getJobsByType(String jobType) {
        return jobRepository.findByJobTypeAndIsActiveTrue(jobType);
    }
    
    public List<String> getAllDepartments() {
        return jobRepository.findDistinctDepartments();
    }
    
    public Optional<Job> getJobById(Long id) {
        return jobRepository.findById(id);
    }
    
    public Job createJob(Job job) {
        return jobRepository.save(job);
    }
    
    public Job updateJob(Long id, Job jobDetails) {
        Optional<Job> optionalJob = jobRepository.findById(id);
        if (optionalJob.isPresent()) {
            Job job = optionalJob.get();
            job.setJobTitle(jobDetails.getJobTitle());
            job.setDepartment(jobDetails.getDepartment());
            job.setLocation(jobDetails.getLocation());
            job.setJobType(jobDetails.getJobType());
            job.setExperienceLevel(jobDetails.getExperienceLevel());
            job.setDescription(jobDetails.getDescription());
            job.setRequirements(jobDetails.getRequirements());
            job.setResponsibilities(jobDetails.getResponsibilities());
            job.setSalaryRange(jobDetails.getSalaryRange());
            job.setIsActive(jobDetails.getIsActive());
            job.setClosingDate(jobDetails.getClosingDate());
            return jobRepository.save(job);
        }
        return null;
    }
    
    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
    
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }
}