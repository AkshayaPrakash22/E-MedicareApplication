package com.medicare.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Medicine {
      @Id
      private int medid;
      private String medname;
      private float price;
      private String seller;
      private String description;
      private String category;
      private String medimg;
      public Medicine() {
    	  super();
      }
      public Medicine(int medid,String medname,float price,String seller,String description,
    		  String category,String medimg) {
    	     super();
    	     this.medid=medid;
    	     this.medname=medname;
    	     this.price=price;
    	     this.seller=seller;
    	     this.description=description;
    	     this.category=category;
    	     this.medimg=medimg;
       }
	
	public int getMedid() {
		return medid;
	}
	public void setMedid(int medid) {
		this.medid = medid;
	}
	public String getMedname() {
		return medname;
	}
	public void setMedname(String medname) {
		this.medname = medname;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getSeller() {
		return seller;
	}
	public void setSeller(String seller) {
		this.seller = seller;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getMedimg() {
		return medimg;
	}
	public void setMedimg(String medimg) {
		this.medimg = medimg;
	}
	@Override
	public String toString() {
		return "Medicine [medid=" + medid + ", medname=" + medname + ", price=" + price + ", seller=" + seller
				+ ", description=" + description + ", category=" + category + ", medimg=" + medimg + "]";
	}
      
}
