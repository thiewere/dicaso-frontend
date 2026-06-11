import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Material } from '../../models/material.model';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  httpClient = inject(HttpClient)

  getPurchases() {
    return this.httpClient
    .get<Material[]>("http://localhost:3000/materials?_embed=purchases")
  }
}
