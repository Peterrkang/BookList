import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">{book.title}
        </li>
      );

    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

}

function mapStateToProps(state){
  //Whatever is returned will show up as props inside bookList
  return {
    books: state.books
  };
}

//Aything returned b this function will end up as props
//on the booklist Container
function mapDispatchToProps(dispatch){
  //Whenever selectBook is called result shud be passed to
  // all reducers thats what bindactionCreators does
  return bindActionCreators({ selectBook: selectBook }, dispatch);

}

//promote BookList from a compnent to a container - it needs to
//know about this new dispatch method,selectBook. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
