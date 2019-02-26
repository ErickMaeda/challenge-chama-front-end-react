import React, {
    Component
} from 'react';
import TodoItem from '../components/TodoItem';
import withHeaderHoc from '../hocs/withHeaderHoc';
import { connect } from "react-redux";
import { fetch as fetchTodos } from '../actions/todoActions';
import {
    Card,
    ListGroup
} from 'react-bootstrap';
import TodoItemInputCreate from '../components/TodoItemInputCreate';

class TodosScreen extends Component {

    state = {
        todos: [
            {
                id: 1,
                description: 'blablabla',
                completed: false
            },
            {
                id: 2,
                description: 'blablabla 2',
                completed: false
            },
            {
                id: 3,
                description: 'blablabla 3',
                completed: true
            },
        ]
    };

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div className="container margin" style={containerStyle}>
                <Card>
                    <Card.Header>
                        Task List
                    </Card.Header>
                    <div className="container margin" style={containerStyle}>
                        <TodoItemInputCreate/>
                    </div>
                    <ListGroup variant="flush">
                        {
                            this.props.todos.map((todo) => (
                                <ListGroup.Item key={todo.id}>
                                    <TodoItem todo={todo}/>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Card>
            </div>
        );
    }
};

const containerStyle = {
    marginTop: 25
};

const mapStateToProps = ({todos}) => {
    return {
        todos
    };
};
  
export default connect(mapStateToProps, {fetchTodos})(withHeaderHoc(TodosScreen));