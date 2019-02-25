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

    render() {        
        const {description, completed, id} = this.props.todo;
        return (
            <Card>
                <Card.Body>
                    <FormCheck onChange={this.props.updateCompleted.bind(this, id, !completed)} checked={completed} inline />{description}
                </Card.Body>
            </Card>
        );
    }
};

export default connect(null, {updateCompleted})(TodoItem);