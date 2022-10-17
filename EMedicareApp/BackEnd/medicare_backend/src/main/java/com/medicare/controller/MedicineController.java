package com.medicare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.bean.Medicine;
import com.medicare.service.MedicineService;

@RestController
@RequestMapping("/medicine")
@CrossOrigin(origins="http://localhost:4200")
public class MedicineController {
          @Autowired
          MedicineService medicineService;
          @PostMapping(value = "storeMedicine",consumes = MediaType.APPLICATION_JSON_VALUE)
  		  public String storeMedicine(@RequestBody Medicine medicine) {
  					return medicineService.storeMedicine(medicine);
  		  }
          @PatchMapping(value = "updateMedicine",consumes = MediaType.APPLICATION_JSON_VALUE)
  		  public String updateMedicine(@RequestBody Medicine medicine) {
  						return medicineService.updateMedicine(medicine);
  		 }
          @GetMapping(value = "getAllMedicines",produces = MediaType.APPLICATION_JSON_VALUE)
        			public List<Medicine> getAllMedicineInfo() {
        				return medicineService.getAllMedicines();
        }
          


          

}
