import BookApi from '../../../mockapi/bookProxy'
import React, {Component} from "react";
import ReactDOM from "react-dom";
import MyBooksList from './myBooksList'

class Books extends Component {
    constructor() {
        super();

        //same as getInitialState
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        this.setState({
            books: BookApi.getAllBooks()
        });
    }

    render() {
        return(
            <div>
                <h1>Books</h1>
                {/* Renders the MyBooksList component and passes books (from state) as a property (props) to the child component */}
                <MyBooksList books={this.state.books} />
            </div>
        );
    }
}

export default Books