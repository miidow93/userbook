import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { MysqlConfigService } from '../mysql-config.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  editForm: FormGroup;
  @Input() book: Book = new Book();
  books: Observable<Book[]>;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private bookService: MysqlConfigService) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      pages: ['', Validators.required]
    });
  }

  updateBook(title: string, pages: number) {
    this.bookService.updateBook(this.book.id, {title: title, pages: pages})
        .subscribe(
          data => {
            console.log(data);
            this.book = data as Book;
            this.reloadData();
          },
          err => console.log(err)
        );
  }

  reloadData() {
    this.books = this.bookService.getAllBooks();
  }

}
