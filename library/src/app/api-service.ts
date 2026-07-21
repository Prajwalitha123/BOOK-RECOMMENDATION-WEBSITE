import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private proxyUrl = 'https://corsproxy.io/?url=';
  private baseUrl = 'https://openlibrary.org';

  constructor(private http: HttpClient) {}

  getAllBooks(subject: string = 'fiction', limit: number = 12) {
    const targetUrl = `${this.baseUrl}/search.json?subject=${subject}&limit=${limit}`;
    return this.http.get(this.proxyUrl + encodeURIComponent(targetUrl));
  }

  searchBooks(query: string, limit: number = 24) {
    const targetUrl = `${this.baseUrl}/search.json?q=${encodeURIComponent(query)}&limit=${limit}`;
    return this.http.get(this.proxyUrl + encodeURIComponent(targetUrl));
  }

  getSingleBook(key: string) {
    const targetUrl = `${this.baseUrl}/works/${key}.json`;
    return this.http.get(this.proxyUrl + encodeURIComponent(targetUrl));
  }
}