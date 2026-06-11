import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from "primeng/button";

@Component({
  selector: 'app-main-page',
  imports: [CardModule, ButtonModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
