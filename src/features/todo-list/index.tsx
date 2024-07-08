'use client';

import { useState } from 'react';

import { TodoFormSchemaType } from '@/schemas/todo-form-schema';

import { TodoForm } from './todo-form';
import { Todo, TodoListView } from './todo-list-view';

const BTN_TEXT = {
  CREATE: 'Create Todo',
  UPDATE: 'Update Todo',
} as const;

const todos: Todo[] = [];

export const TodoList = () => {
  // const [todoId, setTodoId] = useState<string>('');
  const [btnText] = useState<string>(BTN_TEXT.CREATE);

  const handleSubmit = async (_formValues: TodoFormSchemaType) => {};
  const handleUpdate = async (_id: string) => {};

  return (
    <div className="p-10">
      <h1 className="pb-10 text-center text-3xl font-bold">
        Indexed DB Todo Application
      </h1>

      <TodoListView todos={todos} handleUpdate={handleUpdate} />
      <TodoForm handleSubmit={handleSubmit} btnText={btnText} />
    </div>
  );
};
