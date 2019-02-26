import { Component, OnInit } from '@angular/core';
import { MysqlConfigService } from '../mysql-config.service';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  constructor(private bookService: MysqlConfigService) { }

  //books: Observable<Book[]>;
  books: Array<any>;

  ngOnInit() {
    //this.onLoad();
    this.bookService.getAllBooks().subscribe(
      (res) => {
        this.books = res;
        console.log(res);
      }, (err) => console.log(err)
    );
  }

  onLoad() {
    //this.books = this.bookService.getAllBooks();
  }

}
