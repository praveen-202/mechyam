	package com.mechyam.repository;
	
	import com.mechyam.entity.JobApplication;
	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Repository;
	
	import java.util.List;
	
	@Repository
	public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
	    List<JobApplication> findByJobIdOrderByApplicationDateDesc(Long jobId);
	    List<JobApplication> findByStatusOrderByApplicationDateDesc(String status);
	    List<JobApplication> findAllByOrderByApplicationDateDesc();
	    boolean existsByEmailAndJobId(String email, Long jobId);
	}