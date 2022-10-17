package com.medicare.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.medicare.bean.Medicine;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine,Integer> {
	@Query("select p from Medicine p where p.medid > :medid")
	public List<Medicine> getMedicineById(@Param("medid") int medid);

}
