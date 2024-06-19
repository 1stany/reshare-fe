import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ItemType } from '../model/itemtype.model';
import { WishlistService } from '../services/wishlist.service';

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
    this.typeForm = this.formBuilder.group({
      name : ['', Validators.required],
      description : ['', Validators.required],
      categoryName : ['', Validators.required]
    })
  }

  onSubmit(){

  }
  

}
