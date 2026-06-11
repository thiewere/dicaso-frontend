import { Component, inject, signal } from '@angular/core';

import { TableModule } from 'primeng/table';
import { PurchaseService } from '../services/purchase/purchase-service';
import { Material } from '../models/material.model';
import { Purchase } from '../models/purchase.model';

@Component({
  selector: 'app-purchases-list',
  imports: [TableModule],
  templateUrl: './purchases-list.html',
  styleUrl: './purchases-list.scss',
})
export class PurchasesList {
  purchaseService = inject(PurchaseService)

  purchases = signal<Purchase[]>([])
  materials = signal<Material[]>([])

  constructor() {
    this.purchaseService.getPurchases()
    .subscribe((materials) => {
      this.materials.set(materials)

      // extract the nested purchases array 
      const flatPurchases = materials.flatMap(material => 
        material.purchases.map(purchase => ({
          ...purchase,
          materialName: material.name,
          materialType: material.type
        }))
      )
      this.purchases.set(flatPurchases)
    })
  }
}
