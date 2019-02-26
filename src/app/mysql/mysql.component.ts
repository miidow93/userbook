import { Component, OnInit } from '@angular/core';
import { MysqlConfigService } from '../mysql-config.service';

@Component({
  selector: 'app-mysql',
  templateUrl: './mysql.component.html',
  styleUrls: ['./mysql.component.css']
})
export class MysqlComponent implements OnInit {
  books: Array<any>;

  constructor(private bookDAO: MysqlConfigService) { }

  ngOnInit() {
    this.bookDAO.getAllBooks().subscribe(
      (response) => {
        this.books = response;
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
