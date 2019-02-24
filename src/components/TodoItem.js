import React, {
    Component
} from 'react';
import {
    Card
} from 'react-bootstrap';

class TodoItem extends Component {

    render() {
        const {description} = this.props.todo;
        
        return (
            <Card>
                <Card.Body>{description}</Card.Body>
            </Card>
        );
    }
};

export default TodoItem;