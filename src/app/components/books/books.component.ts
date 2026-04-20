import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditBookComponent } from '../edit-book/edit-book.component';

@Component({
  selector: 'app-books',
  imports: [FormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  constructor(private bookService: BookService, private modal: NgbModal, private cdr: ChangeDetectorRef) { }

  books: Book[] = [];

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res) => {
      this.books = res as Book[];
      this.cdr.detectChanges();
    });
  }

  editModal(book: Book) {
    const modalRef = this.modal.open(EditBookComponent, {
      centered: true,
      size: 'lg',
    });
    modalRef.componentInstance.id = book.id;
  }

  deleteBook(book: Book) {
    if (confirm('Delete this book?')) {
      this.bookService.deleteBook(book);
    }
  }
}
