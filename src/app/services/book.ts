import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private firestore: Firestore) {}

  getBooks() {
    const ref = collection(this.firestore, 'books');
    return collectionData(ref, { idField: 'id' });
  }

  getBookById(id: string) {
    const ref = doc(this.firestore, `books/${id}`);
    return docData(ref, { idField: 'id' });
  }

  addBook(book: Book) {
    const ref = collection(this.firestore, 'books');
    return addDoc(ref, book);
  }

  updateBook(book: Book) {
    const ref = doc(this.firestore, `books/${book.id}`);
    return setDoc(ref, book);
  }

  deleteBook(book: Book) {
    const ref = doc(this.firestore, `books/${book.id}`);
    return deleteDoc(ref);
  }
}
