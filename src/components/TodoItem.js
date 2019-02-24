import React, {
    Component
} from 'react';

class TodoItem extends Component {

    render() {
        const {description, id} = this.props.todo;

        return ( 
            <div style={containerStyle}>
                <h3>{description} {id}</h3>
            </div>
        );
    }
};

const containerStyle = {
    background: 'red'
};

export default TodoItem;