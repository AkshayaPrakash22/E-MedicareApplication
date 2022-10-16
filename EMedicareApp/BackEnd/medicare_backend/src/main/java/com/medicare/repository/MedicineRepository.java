package com.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicare.bean.Medicine;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine,Integer> {

}
