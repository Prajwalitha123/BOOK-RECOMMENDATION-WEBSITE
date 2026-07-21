import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BookCard } from '../../component/book-card/book-card';
import { Carousel } from '../../component/carousel/carousel';
import { ApiService } from '../../api-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, BookCard, Carousel],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  trendingBooks: any[] = [];
  loading = true;
  searchQuery = '';

  genres = [
    { name: 'Fiction', icon: 'bi-book', color: '#f97316' },
    { name: 'Science', icon: 'bi-flask', color: '#3b82f6' },
    { name: 'History', icon: 'bi-hourglass-split', color: '#a855f7' },
    { name: 'Fantasy', icon: 'bi-stars', color: '#ec4899' },
  ];

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.api.getAllBooks().subscribe({
      next: (res: any) => {
        this.trendingBooks = (res.docs || []).slice(0, 4);
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Trending books API error:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/books'], { queryParams: { q: this.searchQuery } });
    }
  }
}