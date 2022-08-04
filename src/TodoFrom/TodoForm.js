import React from "react";
import "./TodoForm.css"

function TodoForm(props) {

    const [name, setName]=React.useState("");

    const handleChange = (e) => {
        setName(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(name)
        setName("")
    };

    return(
        <form className="todo__form" onSubmit={handleSubmit}>
            <h2>Создание задачи</h2>
            <input
                className="todo__input"
                minLength="2" maxLength="40"
                name="todo__name" type="text"
                value={name || ""}
                onChange={handleChange}
                placeholder="Название"
                required/>
            <button className="todo__add-button" type="submit">Добавить задачу</button>
        </form>
    )
}

export default TodoForm;
