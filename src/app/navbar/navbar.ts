import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule, RouterModule, NgOptimizedImage],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
