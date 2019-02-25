import React, {
    Component
} from 'react';
import TodoItem from '../components/TodoItem';
import Header from '../components/Header';
import { connect } from "react-redux";
import { fetch as fetchTodos } from '../actions/todoActions';
import {
    Card,
    ListGroup
} from 'react-bootstrap';

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
            <div>
                <Header />
                <Card style={containerStyle}>
                    <Card.Header>To Dos</Card.Header>
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
    margin: 25
};

const mapStateToProps = ({todos}) => {
    return {
        todos
    };
};
  
export default connect(mapStateToProps, {fetchTodos})(TodosScreen);