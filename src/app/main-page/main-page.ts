import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from "primeng/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-main-page',
  imports: [CardModule, ButtonModule, RouterLink],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
