import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/medicine';
import { MedicineService } from 'src/app/medicine.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './update.component.html',
  styleUrls:['./update.component.css']
})
export class UpdateComponent implements OnInit {
  products: Array<Medicine> = [];
  updateMsg: string = ""
  medid: number = 0;
  price: number = 0;
  medname: String = "";
  description: String = "";
  seller: String= "";
  category: String = "";
  medimg: String = "";
  flag: boolean = false;
    constructor(public ser: MedicineService) { } //DI for Service class

  ngOnInit(): void {
    this.loadProducts();
  }
  // Loading the Product details
  loadProducts(): void {
    this.ser.loadProductDetails().subscribe(res => this.products = res
    );
    console.log('pro', this.products)
  }

  
  // Updating the product details
  updateProduct(product: Medicine) {
    console.log(product);
    this.flag = true;
    this.medid = product.medid;
    this.price = product.price;
    this.category = product.category;
    this.medname = product.medname;
    this.medimg = product.medimg;
    this.description=product.description;
    this.seller=product.seller;
  }
  updateProductDetails() {
    let product = { "medid": this.medid, "price": this.price, "medname": this.medname, "description": this.description, 
    "seller":this.seller,"category": this.category, "medimg": this.medimg }
    console.log(product);
    this.ser.updateMedicine(product).subscribe(result => this.updateMsg = result, error => console.log(error),
      () => {
        this.loadProducts();
        alert("Product Updated Successfully");
        this.flag = false;
      })
  }
}

