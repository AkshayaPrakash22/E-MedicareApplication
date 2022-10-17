import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  productRef= new FormGroup({
    medid:new FormControl(),
    medname:new FormControl(),
    price:new FormControl(),
    description:new FormControl(),
    seller:new FormControl(),
    category:new FormControl(),
    medimg:new FormControl(),
  });
products:Array<Medicine>=[]
showAdd !: boolean;
 constructor(private router: Router, private med : MedicineService) { }

  ngOnInit(): void {
  }
  clickAddMedicine()
  {
   this.showAdd= true;
  }
  

  storeProduct()
  {
    let product=this.productRef.value;
    this.med.storeMedicine(product).subscribe({
        next:(data:any)=>console.log(data),
        error:(error:any)=>console.log(error),
      })
      alert("Product added Successfully");
      this.productRef.reset();
    }

  clickShowMedicine(){
    this.router.navigate(['/update']);
    
  }
}
 




  