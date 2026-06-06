import { Component } from '@angular/core';
import { Navbar } from '../../shared/ui/navbar/navbar';
import { Footer } from '../../shared/ui/footer/footer';
import { Hero } from '../../features/home/components/hero/hero';

@Component({
  selector: 'app-main-layout',
  imports: [Navbar, Footer, Hero],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
