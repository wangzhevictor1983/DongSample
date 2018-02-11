import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  source: LocalDataSource;
  data = [
    {
      id: 1,
      name: "test1",
      username: "testuser1",
      email: "testuser1@mail.com"
    },
    {
      id: 2,
      name: "test2",
      username: "testuser2",
      email: "testuser2@mail.com"
    },
    {
      id: 3,
      name: "test3",
      username: "testuser3",
      email: "testuser3@mail.com"
    }
];

settings = {
  columns: {
    id: {
      title: 'ID',
      filter: false
    },
    name: {
      title: 'Full Name',
      filter: false
    },
    username: {
      title: 'User Name',
      filter: false
    },
    email: {
      title: 'Email',
      filter: false
    }
  }
};
  constructor () {
    this.source = new LocalDataSource(this.data);
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false); 
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
}
