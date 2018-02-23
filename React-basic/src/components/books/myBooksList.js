import BookApi from '../../../mockapi/bookProxy'
import React, {Component} from "react";
import ReactDOM from "react-dom";

class MyBooksList extends Component {
    constructor() {
        super();
        
        //same as getInitialState
        this.state = {
            books: []
        };
    }

    //Called whent the component is rendering for the 1st time
    componentWillMount() {
        this.setState({
            books: BookApi.getAllBooks()
        });
    }

    createBookRow(book) {
        return(
            <tr key={book.id}>
                <td><a href={"/#books/" + book.id}>{book.name}</a></td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.rating}</td>
            </tr>
        );
    };

    render() {
        
        //Can be declared as an inline function as well (instead of pointing to an external function)
        //The below is not needed if the HTML directly calls the createUserRow of the Users class
        //var createUserRow = this.createUserRow; 

        return(
            <div>
                <h1>My Books</h1>

                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Publisher</th>
                            <th>Ratings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map is a JavaScript function which will call the createUserRow method for every books object */}
                        {this.state.books.map(this.createBookRow, this)} 

                        {/* Inline implementation withour calling a method */}
                        {/* {this.state.books.map(book => 
                            { return(
                                <tr key={book.id}>
                                    <td><a href={"/#books/" + book.id}>{book.id}</a></td>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                </tr>
                                )})}  */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MyBooksList