import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book',
  imports: [FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  constructor(private bookService: BookService) {}

  book: Book = {
    name: '',
    author: '',
    genre: '',
    price: 0
  };

  onSubmit(form: NgForm) {
    this.bookService.addBook(form.value).then(() => form.reset());
  }
}
