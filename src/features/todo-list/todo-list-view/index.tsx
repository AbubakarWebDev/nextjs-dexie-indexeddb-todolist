import { TodoRow } from './todo-row';
import { TodoTable } from './todo-table';

export interface Todo {
  id: string;
  name: string;
  image: Blob;
}

interface TodoListViewProps {
  todos: Todo[];
  handleUpdate: (id: string) => void;
}

export const TodoListView: React.FC<TodoListViewProps> = ({
  todos,
  handleUpdate,
}) => {
  const handleDelete = async (_id: string) => {};

  return (
    <TodoTable>
      {todos.map((todo, index) => (
        <TodoRow
          key={todo.id}
          name={todo.name}
          index={index + 1}
          image={todo.image}
          handleDelete={() => handleDelete(todo.id)}
          handleUpdate={() => handleUpdate(todo.id)}
        />
      ))}
    </TodoTable>
  );
};
