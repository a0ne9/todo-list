import React from "react";
import "./Todo.css"

function Todo(props) {

    // Открываем форму для редактирования
    const handleClick = () => {
        props.onEditClick(props.todo);
    }

    // Удаляем задачу
    const handleDelete = () => {
        props.onDelete(props.todo.id)
    }

    return(
        <li className={props.todo.started ? "todo todo_blue" : props.todo.completed ? "todo todo_green" : "todo"}>
            <button type="button" className="todo__delete-button" onClick={handleDelete}>X</button>
            <h2 className="todo__text">{props.text}</h2>
            <button className="todo__button" type="button" onClick={handleClick}>Редактировать</button>
        </li>
    )
}

export default Todo
