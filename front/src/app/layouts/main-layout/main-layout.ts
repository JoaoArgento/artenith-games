import { Component } from '@angular/core';
import { Navbar } from '../../shared/ui/navbar/navbar';
import { Footer } from '../../shared/ui/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
