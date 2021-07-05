import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
   
@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
 
      constructor(private http: HttpClient){

      }

      getItem(){
      return    this.http.get('http://localhost:3000/data')
      }

      updateItem(data){
    
          return this.http.post('http://localhost:3000/data', data, httpOptions)
      }
      deleteItem(id){
       
          return this.http.delete('http://localhost:3000/data/' + id, httpOptions)
      }
  }