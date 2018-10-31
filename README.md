# MyReads Project

A simple app written in ReactJS, to search and add books to a managed book collection..

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What Youre Getting --> see below for changes
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. Its unlikely that youll need to modify this.
├── public
│   ├── favicon.ico # React Icon You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably wont need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


```bash (with changes)
    |__ .gitignore                          
    |__ CONTRIBUTING.md                     
    |__ package-lock.json                   
    |__ package.json                        
    |__ README.md                           
    |__ SEARCH_TERMS.md                     
    |__ public                              
    |   |__ favicon.ico                     
    |   |__ index.html                      
    |__ src                                 
        |__ App.css                         
        |__ App.js      # Uses React DOM Router and has two routes (home and search) which render the book list component and search component respectively
        |__ App.test.js                     
        |__ book-cover.component.js     # A functional component which just takes a url as a prop and renders a book cover
        |__ book-shelf-switcher.component.js    # To move a book to one of the shelves. Fetches (when unspecified) and shows the current shelf of the book.
        |__ book.component.js       # A reusable component which composes of the cover and the shelf-switcher componens
        |__ books-grid.component.js     # A collection of a given array of books represented in a grid. Used in the book-shelf component and search-books component
        |__ BooksAPI.js     
        |__ bookshelf.component.js  # A book takes shelf metadata and book collection metadata
        |__ index.css
        |__ index.js    # App is wrapped in BrowserRouter                       
        |__ list-books.component.js     #  Shows all shelves and the books in each of them
        |__ search-books-bar.component.js   # Search bar 
        |__ search-books.component.js   # composed of Search bar and a books-grid component to show search results. Search requests are debounced (used lodash)
        |__ shelf-name-values.js    # A data container for all shelves (name value pairs of shelves, which is imported into components as needed)
        |__ icons                           
            |__ add.svg                     
            |__ arrow-back.svg              
            |__ arrow-drop-down.svg         
```


1) Components are designed to be reused and each one is highly cohesive (SRP)
2) Most of best practices for React 16+ are followed to my knowledge
3) There's a single source of truth of any component. (mutable State and immutable Props aren't doing any funny stuff)
4) The app works as per "Rubrics" https://review.udacity.com/#!/rubrics/918/view


## Backend Server

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead" "currentlyReading" "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. Youll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend so dont be surprised if your searches for Basket Weaving or Bubble Wrap dont come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
