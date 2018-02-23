import React, {Component} from "react";
import ReactDOM from "react-dom";

class MyBooksList extends Component {
    constructor() {
        super();
        
        /* Below is needed when the properties are not passed from parent component
        //same as getInitialState
        // this.state = {
        //     books: []
        // };
        */
    }

    /* Below is needed when the properties are not passed from parent component
    //Called whent the component is rendering for the 1st time
    componentWillMount() {
        this.setState({
            books: BookApi.getAllBooks()
        });
    }
    */
    
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
                        {this.props.books.map(this.createBookRow, this)} 

                        {/* The below is called when books is a state of the component and there are no parent components. Parent component will pass books as props to this compoennt */}
                        {/* {this.state.books.map(this.createBookRow, this)}  */}
                        
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
        );
    }
}

export default MyBooksList