import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Marked from "./common/marked";
import Pagination from "./common/pagination";
import { getTodos } from "../services/fakeTodoService";
import { getTypes } from "../services/fakeTypeService";
import { paginationUtil } from "../utils/paginationUtil";

class Todos extends Component {
  state = {
    todos: getTodos(),
    types: [],
    currentPage: 1,
    pageSize: 10
  };

  componentDidMount() {
    this.setState({ todos: getTodos(), types: getTypes() });
  }

  handleDelete = todo => {
    const todos = this.state.todos.filter(t => t._id !== todo._id);

    this.setState({ todos });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleMark = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);

    todos[index] = { ...todos[index] };
    todos[index].marked = !todos[index].marked;

    this.setState({ todos });
  };

  handleGenreSelect = type => {};

  render() {
    const { length: count } = this.state.todos;
    const { pageSize, currentPage, todos: allTodos } = this.state;
    const todos = paginationUtil(allTodos, currentPage, pageSize);

    if (count === 0)
      return (
        <React.Fragment>
          <table className="table table-borderless col">
            <thead className="thead-dark">
              <tr>
                <th>Task Title</th>
                <th>Type</th>
                <th>
                  <Marked />
                </th>
                <th>Delete</th>
              </tr>
            </thead>
          </table>
          <p className="text-center">There are no todos in the list.</p>
        </React.Fragment>
      );

    return (
      <div className="row">
        <div className="col">
          <table className="table table-borderless">
            <thead className="thead-dark">
              <tr>
                <th />
                <th>Todos</th>
                <th className="dropdown-toggle" herf="#" role="button">
                  Type
                </th>
                <div className="dropdown-menu">
                  <a class="dropdown-item">A</a>
                </div>
                <th>
                  <Marked />
                </th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => (
                <tr key={todo._id}>
                  <td />
                  <td>{todo.title}</td>
                  <td>{todo.type.name}</td>
                  <td>
                    <Marked
                      onClick={() => this.handleMark(todo)}
                      marked={todo.marked}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(todo)}
                      className="btn btn-outline-dark btn-sm"
                    >
                      Del
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-center">{count} todos in the list.</p>

          <Pagination
            onPageChange={this.handlePageChange}
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Todos;
