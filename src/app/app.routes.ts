import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { PurchasesList } from './purchases-list/purchases-list';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: MainPage},
    {path: 'home/purchases', component: PurchasesList}
];
