import { Component, OnInit } from '@angular/core';
import { MongoConfigService } from '../mongo-config.service';

@Component({
  selector: 'app-mongo-db',
  templateUrl: './mongo-db.component.html',
  styleUrls: ['./mongo-db.component.css']
})
export class MongoDBComponent implements OnInit {

  constructor(private userDAO: MongoConfigService) { }

  ngOnInit() {
    this.userDAO.getAllUsers().subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
