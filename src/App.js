import React from 'react'
import './App.css'
import ListBooks from './list-books.component';
import SearchBooks from './search-books.component';
import {Route, Switch} from 'react-router-dom';
import Page404 from './page404.component';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <ListBooks />} ></Route>
          <Route exact path="/search" render={() => <SearchBooks />} ></Route>
          <Route path="" render={() => <Page404 redirectTimeout={30} />} />
        </Switch>        
      </div>
    )
  }
}

export default BooksApp
