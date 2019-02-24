import React, {
    Component
} from 'react';
import TodoItem from '../components/TodoItem';
import Header from '../components/Header'
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

    render() {
        return ( 
            <div>
                <Header />
                {this.state.todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
            </div>
        );
    }
};

export default TodosScreen;