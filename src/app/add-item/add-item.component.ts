import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Item } from '../model/item.model';
import { AddItemService } from '../services/add-item.service';
import { ItemForm } from '../model/item-form.model';
import { FullItem } from '../model/full-item.model';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  user : User | undefined;
  fullItem : FullItem | undefined;
  constructor( private userService: UserService, private addItemService : AddItemService, private router: Router) { }

  onSubmit(ngForm : NgForm){
    const currentItem :Item = {
      name : ngForm.value.name,
      description : ngForm.value.description,
      activetrade : ngForm.value.activetrade,
      condition : ngForm.value.condition,
      conditionComment : ngForm.value.conditionComment,
      categoryName : ngForm.value.categoryName,
      creationDate : new Date().toISOString().split('T')[0],
      ownerEmail: localStorage.getItem('userEmail')! //this.datePipe.transform(new Date(), 'dd-MMM-uuuu')!
    };

    this.addItemService.saveItem(currentItem).subscribe({
      next: (resp)=>this.router.navigate(['']), //implementare con la lista degli oggetti per user
      error: (er)=>{
        console.log(er);
        alert('Errore durante il salvataggio dell\'item');
      }
    });
  }

}
