import React, {
    Component
} from 'react';
import TodoItem from '../components/TodoItem';
import withHeaderHoc from '../hocs/withHeaderHoc';
import { connect } from "react-redux";
import { fetch as fetchTodos } from '../actions/todoActions';
import {
    Card,
    ListGroup,
    Button,
    Modal
} from 'react-bootstrap';
import TodoItemInputCreate from '../components/TodoItemInputCreate';

class TodosScreen extends Component {

    state = {
        showModalTodoItemInputCreate: false
    };
    
    componentDidMount() {
        this.props.fetchTodos();
    }
    
    showModalTodoItemInputCreate = (show = true) => this.setState({ showModalTodoItemInputCreate: show });

    renderModalTodoItemInputCreate = () => {

        return (
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.showModalTodoItemInputCreate}
                onHide={this.showModalTodoItemInputCreate.bind(this, false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TodoItemInputCreate
                        
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.showModalTodoItemInputCreate.bind(this, false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    renderTodoList = () => {
        return (
            <ListGroup variant="flush">
                {
                    this.props.todos.map((todo) => (
                        <ListGroup.Item key={todo.id}>
                            <TodoItem todo={todo}/>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        );
    }

    render() {
        return (
            <div className="container margin" style={containerStyle}>
                <Card>
                    <Card.Header>
                        <div class="row justify-content-between container">
                            <div style={{paddingTop: 5}}>
                                <Card.Title>Tasks</Card.Title>
                            </div>
                            <div>
                                <Button variant="success" onClick={this.showModalTodoItemInputCreate.bind(this, true)}>New Task</Button>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        {this.renderTodoList()}
                        {this.renderModalTodoItemInputCreate()}
                    </Card.Body>
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