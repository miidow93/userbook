import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MongoDBComponent } from './mongo-db/mongo-db.component';
import { MysqlComponent } from './mysql/mysql.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBookComponent } from './list-book/list-book.component';


const routes: Routes = [
  { path: 'mongo', component: MongoDBComponent},
  { path: 'mysql', component: MysqlComponent},
  { path: 'book/add', component: AddBookComponent},
  { path: 'book/edit/:id', component: EditBookComponent},
  { path: 'book', component: ListBookComponent},
  { path: 'book/list', component: ListBookComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
