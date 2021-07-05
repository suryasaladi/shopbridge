import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {
  addupdateForm: FormGroup;
  submitted: boolean=false;
  id: any;
  itemData: any={};
  itemShow: any={};
  flag:any;

  get f() { return this.addupdateForm.controls; }
  constructor( private product:ProductService ,private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute, private router: Router, private location: Location) {
    this.addupdateForm = this.formBuilder.group({
      itemName: new FormControl('', Validators.required),
      itemPrice: new FormControl('', Validators.required),
      itemDescription:new FormControl('', Validators.required),
      itemCatoegory:new FormControl('', Validators.required)
       })
       this.activatedRoute.params.subscribe(params => {
         console.log(params)
      
       })

console.log(this.id)
this.itemData=localStorage.getItem('item')
console.log(this.itemData)

  }

  ngOnInit(): void {

this.itemShow= JSON.parse(this.itemData)

this.flag= localStorage.getItem('flag')
if(this.flag==="true"){
  this.itemShow={}
}

if(this.itemShow !== null && this.id!==null){

      this.addupdateForm.setValue({
   
        itemName: this.itemShow.itemName,
        itemPrice: this.itemShow.itemPrice,
        itemDescription: this.itemShow.itemDescription,
        itemCatoegory:this.itemShow.itemCatoegory
    
      })
    }
    else{
   
      this.addupdateForm = this.formBuilder.group({
        itemName: new FormControl('', Validators.required),
        itemPrice: new FormControl('', Validators.required),
        itemDescription:new FormControl('', Validators.required),
        itemCatoegory:new FormControl('', Validators.required)
         })
    }   
  
  }

  onSubmit(){
    this.submitted = true;

    if (this.addupdateForm.invalid) {
      return;
    }
    let obj= this.addupdateForm.value

    this.product.updateItem(obj).subscribe(res=>{
      this.router.navigateByUrl('/inventory')
      localStorage.removeItem('flag')
      
  }),
  (err) => console.log(err)

}

  goBack(){
    this.location.back();
  }
}
