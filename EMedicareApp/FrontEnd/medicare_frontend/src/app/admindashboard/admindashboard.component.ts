import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  formValue !: FormGroup;
  MedObj : Medicine = new Medicine();
  MedicineData : any;
  showAdd !: boolean;
  showUpdate !: boolean;

 constructor(private formbuiler: FormBuilder, private med : MedicineService) { }

  ngOnInit(): void {
    this.formValue = this.formbuiler.group({
      medid : [''],
      medname : [''],
      price : [''],
      description : [''],
      seller : [''],
      category : [''],
      url : ['']
    })

  }
  clickAddMedicine()
  {
    this.formValue.reset();
    this.showAdd= true;
    this.showUpdate= false;

  }

  postMedicineDetails()
  {
    this.MedObj.medname = this.formValue.value.medname;
    this.MedObj.medid = this.formValue.value.medid;
    this.MedObj.price= this.formValue.value.price;
    this.MedObj.description= this.formValue.value.description;
    this.MedObj.seller= this.formValue.value.seller;
    this.MedObj.category=this.formValue.value.category;
    this.MedObj.url=this.formValue.value.url;
  
    this.med.postMedicine(this.MedObj)
    .subscribe(res=>{
      console.log(res);
      alert("Medicine Added")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      
},
    err=>{
      alert("Something went wrong")
    })
  }
 

}




  