import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Books } from './pages/books/books';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Bookdetails } from './pages/bookdetails/bookdetails';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'books', component: Books },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'book/:id', component: Bookdetails },
];