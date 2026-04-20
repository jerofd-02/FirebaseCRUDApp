import { TestBed } from '@angular/core/testing';
import { Book } from '../models/book.model';
import { BookService } from './book';

describe('Book', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
