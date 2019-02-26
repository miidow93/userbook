import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MongoDBComponent } from './mongo-db/mongo-db.component';
import { FormsModule } from '@angular/forms';
import { MysqlComponent } from './mysql/mysql.component';
import { HttpClientModule } from '@angular/common/http';
import { MysqlConfigService } from './mysql-config.service';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBookComponent } from './list-book/list-book.component';



@NgModule({
  declarations: [
    AppComponent,
    MongoDBComponent,
    MysqlComponent,
    AddBookComponent,
    EditBookComponent,
    ListBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [MysqlConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
