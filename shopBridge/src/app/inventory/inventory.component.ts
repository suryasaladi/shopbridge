import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  itemList: any=[];
  message='';

  constructor(private product: ProductService, private router: Router) { }

  ngOnInit(): void {
this.getItem()
  }
  getItem(){
    this.product.getItem().subscribe(data=>{
      console.log(data);
      this.itemList= data
  
    }),
    (err) => console.log(err)

  }
  addItem(){
    this.router.navigate(['addupdate']);
    localStorage.setItem('flag', "true")
  
  }
  deleteItem(index){
    this.product.deleteItem(index).subscribe(res=>{
  
          this.message= index  + " Item Deleted Successfully"
    
          this.getItem()
 
      
  
      
    }),
    (err) => console.log(err)

  }


updateItem(item){
localStorage.setItem('item', JSON.stringify(item))
this.router.navigate(['/addupdate'], { queryParams: { id: item.id  } });
}
//   deleteItem(index){
//     this.itemList
//   }
}
