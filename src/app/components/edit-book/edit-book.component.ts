import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  imports: [FormsModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css',
})
export class EditBookComponent implements OnInit {
  constructor(private bookService: BookService) {}

  @Input() id: string = '';
  @Output() onClose = new EventEmitter<void>();

  book: Book = {} as Book;

  ngOnInit(): void {
    if (this.id) {
      this.bookService.getBookById(this.id).subscribe((res) => {
        if (res) this.book = res as Book;
      });
    }
  }

  onUpdate() {
    const book = this.book;
    if (book) {
      this.bookService.updateBook(book).then(() => this.onClose.emit());
    }
  }

  setPrice(book: Book, price: number) {
    book.price = price;
  }
}
