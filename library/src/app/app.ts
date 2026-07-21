import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'book-app';
}