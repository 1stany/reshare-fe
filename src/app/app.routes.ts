import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LastItemsComponent } from './last-items/last-items.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TradeOfferComponent } from './trade-offer/trade-offer.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddItemtypeComponent } from './add-itemtype/add-itemtype.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'last', component: LastItemsComponent},
    {path: 'item/:id', component: ItemComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'trade-offer/:itemId', component: TradeOfferComponent},
    {path: 'wishlist', component: WishlistComponent},
    {path: 'add-itemtype', component: AddItemtypeComponent},
];

