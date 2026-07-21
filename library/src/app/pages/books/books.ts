import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookCard } from '../../component/book-card/book-card';
import { ApiService } from '../../api-service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, BookCard],
  templateUrl: './books.html',
})
export class Books implements OnInit {
  books: any[] = [];
  loading = true;
  error = false;
  searchTerm: string | null = null;

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const q = params.get('q');
      this.searchTerm = q;
      this.loading = true;
      this.error = false;

      const request = q ? this.api.searchBooks(q) : this.api.getAllBooks();

      request.subscribe({
        next: (res: any) => {
          this.books = res.docs || [];
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('API error:', err);
          this.error = true;
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    });
  }
}