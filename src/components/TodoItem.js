import React, {
    Component
} from 'react';
import {
    Card,
    FormCheck
} from 'react-bootstrap';
import {
    updateCompleted
} from '../actions/todoActions';
import {
    connect
} from 'react-redux';

class TodoItem extends Component {

    renderDescription = () => {
        const {completed, description} = this.props.todo;
        const style = completed ? styleDescriptionCompleted : {};
        return (
            <span style={style}>{description}</span>
        );
    }

    render() {
        const {completed, id} = this.props.todo;
        return (
            <Card>
                <Card.Body>
                    <FormCheck onChange={this.props.updateCompleted.bind(this, id, !completed)} checked={completed} inline />{this.renderDescription()}
                </Card.Body>
            </Card>
        );
    }
};

const styleDescriptionCompleted = {
    textDecoration: 'line-through'
};

export default connect(null, {updateCompleted})(TodoItem);