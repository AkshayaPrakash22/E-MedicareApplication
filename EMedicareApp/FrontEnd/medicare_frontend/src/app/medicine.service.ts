import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http'
import { Medicine } from './medicine';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http: HttpClient) { }

  postMedicine(data : any){
    return this.http.post<any>("http://localhost:8080/medicine/storeMedicine", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
   


  updateMedicine(data : any, medid: number){
    return this.http.put<any>("http://localhost:8080/medicine/updateMedicine"+medid, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}











  

  

  