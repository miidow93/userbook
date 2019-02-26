import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MysqlConfigService } from '../mysql-config.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  @Input() book: Book = new Book();
  bookForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private bookService: MysqlConfigService) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      pages: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookForm.invalid) {
      return;
    }
    this.addBook();
  }

  addBook() {
    this.bookService.createBook(this.book).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
    this.book = new Book();
  }
}
