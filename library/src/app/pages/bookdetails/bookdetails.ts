import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../api-service';

@Component({
  selector: 'app-bookdetails',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bookdetails.html',
  styleUrl: './bookdetails.css'
})
export class Bookdetails implements OnInit {
  book: any;
  loading = true;
  id: any;

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef,
    private ar: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.ar.snapshot.params['id'];
    this.api.getSingleBook(this.id).subscribe({
      next: (res: any) => {
        this.book = res;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('API error:', err);
        this.loading = false;
      }
    });
  }
}