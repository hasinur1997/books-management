import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import AddBook from '../components/AddBook'
import BookList from '../components/BookList'
import useLocalStorage from '../hooks/useLocalStorage'
import EditBook from '../components/EditBook'
import BooksContext from '../context/BooksContext'


const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', [])

    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className="main-content">
                    <BooksContext.Provider value={{books, setBooks}}>
                        <Switch>
                            <Route path="/" exact={true} component={BookList}/>
                            <Route path="/add" component={AddBook}/>
                            <Route path="/edit/:id" component={EditBook}/>
                        </Switch>
                    </BooksContext.Provider>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter