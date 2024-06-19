import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { ItemType } from '../model/itemtype.model';
import { WishlistService } from '../services/wishlist.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-add-itemtype',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-itemtype.component.html',
  styleUrl: './add-itemtype.component.css'
})
export class AddItemtypeComponent implements OnInit {
  typeForm!: FormGroup;



constructor(private formBuilder : FormBuilder, private wishlistService: WishlistService){}
  
  
  ngOnInit(): void {
    
  }

  onSubmit(ngForm : NgForm){
    const currentItemType : ItemType = {
      name: ngForm.value.name,
      description: ngForm.value.description,
      categoryName: ngForm.value.categoryName,
      dateAdded: ''
    }
  }
  

}
