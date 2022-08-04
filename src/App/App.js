import React from "react";
import './App.css';
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoFrom/TodoForm";
import EditFrom from "../EditForm/EditFrom";

function App() {
    // создаем список задач
  const [todos, setTodos] = React.useState([{
      id: Math.random().toString(20),
      text: "Сходить в зал",
      started: false,
      completed: false,
  }, {
      id: Math.random().toString(20),
      text: "Купить продукты",
      started: false,
      completed: true,
  }, {
      id: Math.random().toString(20),
      text: "Почитать книгу",
      started: true,
      completed: false,
  }]);
  const [addFormVisible, setAddFormVisible] = React.useState(true);
  const [editFormVisible, setEditFormVisible] = React.useState(false);
  const [editedTodo, setEditedTodo] = React.useState({})

    // Добавление задачи в список
  const addTodo = (value) => {
    if (value) {
        const newTask = {
            id: Math.random().toString(20),
            text: value,
            started: false,
            completed: false,
        }
        setTodos([newTask, ...todos])
    }
  };

  // Удаление задачи
  const deleteTodo = (id) => {
      setTodos([...todos.filter(todo => (todo.id !== id))]);
  };

  // Открываем форму для редактирования
  const openEditForm = (todo) => {
      setEditFormVisible(true);
      setAddFormVisible(false);
      setEditedTodo(todo)
  };

  // Закрываем форму редактирования
  const closeEditForm = () => {
      setEditFormVisible(false);
      setAddFormVisible(true);
  };

  // Изменяем название задачи
  const editTodoName = (todo, value) => {
      todos.map(tdo => {
          if (tdo.id === todo.id) {
              tdo.text = value;
          }
      });
  };

  // Меняем статус на "в процессе"
  const editTodoStarted = (todo) => {
      todos.map(tdo => {
            if (tdo.id === todo.id) {
                tdo.started = true;
                tdo.completed = false;
            }
        });
  };

    // Меняем статус на "выполнена"
  const editTodoCompleted = (todo) => {
        todos.map(tdo => {
            if (tdo.id === todo.id) {
                tdo.started = false;
                tdo.completed = true;
            }
        });
  };

  return (
    <main className="app__container">
      <TodoList todos={todos} onEditClick={openEditForm} onDelete={deleteTodo}/>
        {addFormVisible ? <TodoForm onSubmit={addTodo}/> : ""}
        {editFormVisible ? <EditFrom
            todo={editedTodo}
            onEditName={editTodoName}
            onEditStart={editTodoStarted}
            onClose={closeEditForm}
            onEditComplete={editTodoCompleted}
        /> : ""}

    </main>
  );
}

export default App;
