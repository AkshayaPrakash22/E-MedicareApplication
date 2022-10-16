package com.medicare.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicare.bean.Medicine;
import com.medicare.repository.MedicineRepository;

@Service
public class MedicineService {
	@Autowired
	MedicineRepository medicineRepository;
	//Add medicine details
	public String storeMedicine(Medicine medicine) {
		if (medicineRepository.existsById(medicine.getMedid())) {
			return "Product Id Should Be Unique";
		} else {
			medicineRepository.save(medicine);
			return "Medicine Details Stored Successfully";
		}
	}
	
	//update medicine details
	public String updateMedicine(Medicine medicine) {
		if (medicineRepository.existsById(medicine.getMedid())) {
			Medicine m = medicineRepository.getById(medicine.getMedid());
			m.setMedname(medicine.getMedname());
			m.setPrice(medicine.getPrice());
			m.setSeller(medicine.getSeller());
			m.setDescription(medicine.getDescription());
			m.setCategory(medicine.getCategory());
			m.setMedimg(medicine.getMedimg());
			medicineRepository.saveAndFlush(m);
			return "Medicine Details Updated Successfully";
			
		} else {
			return "No Medicine Found";
		}
	}


}
