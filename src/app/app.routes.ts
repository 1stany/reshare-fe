import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LastItemsComponent } from './last-items/last-items.component';
import { ItemComponent } from './item/item.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'last', component: LastItemsComponent},
    {path: 'item/:id', component: ItemComponent},
];
