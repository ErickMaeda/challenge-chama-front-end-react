import React, {
    Component
} from 'react';
import {
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap';
import {
    connect
} from 'react-redux';
import {
    add as addTodo
} from '../actions/todoActions';

class TodoItemInputCreate extends Component {

    state = {
        text: ''
    }

    getText = () => {
        return this.state.text;
    }

    focus = () => {
        this.inputRef.focus();
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    onDone = () => {
        if (this.state.text.trim() != '') {
            console.log('legal');
        } else {
            console.log('não é legal');
        }
    }

    render() {
        return (
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Task"
                    aria-label="Task"
                    aria-describedby="basic-addon2"
                    value={this.state.value}
                    onChange={this.handleChange}
                    ref={(inputRef)=> this.inputRef = inputRef}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={this.onDone}>Add</Button>
                </InputGroup.Append>
            </InputGroup>
        );
    }
};

export default connect(null, {addTodo})(TodoItemInputCreate);