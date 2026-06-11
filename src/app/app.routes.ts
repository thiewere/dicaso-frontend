import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { PurchasesList } from './purchases-list/purchases-list';

export const routes: Routes = [
    {path: '', component: MainPage},
    {path: 'purchases', component: PurchasesList}
];
