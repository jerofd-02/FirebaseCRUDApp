import { Component } from '@angular/core';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';

@Component({
  selector: 'app-root',
  imports: [BookComponent, BooksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
