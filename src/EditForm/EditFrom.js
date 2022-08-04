import React from "react";
import "./EditForm.css"

function EditFrom(props) {

    const [name, setName] = React.useState(props.todo.text);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    // Изменение названия
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onEditName(props.todo, name);
        props.onClose();
    }

    // Меняем статус на "в процессе"
    const handleStart = () => {
        props.onEditStart(props.todo);
        props.onClose();
    }

    // Меняем статус на "выполнена"
    const handleComplete = () => {
        props.onEditComplete(props.todo);
        props.onClose();
    }

    return(
        <div className={props.todo.started ? "editform__container editform__container_blue"
            : props.todo.completed ? "editform__container editform__container_green"
                : "editform__container"}>
            <button className="editform__button editform__close-button" type="button" onClick={props.onClose}>X</button>
            <form className="editform" onSubmit={handleSubmit}>
                <h2 className="editform__title">{`Название задачи : ${props.todo.text}`}</h2>
                <p className="editform__subtitle">Изменить задачу</p>
                <input className="todo__input"
                       minLength="2" maxLength="40"
                       name="todo__name" type="text"
                       value={name || ""}
                       onChange={handleChange}
                       placeholder="Название"
                />
                <button type="submit" className="editform__button editform__submit-button">Изменить</button>
            </form>
            <div className="editform__button-container">
                <button type="button" className="editform__button editform__button_blue" onClick={handleStart}>Делаю!</button>
                <button type="button" className="editform__button editform__button_green" onClick={handleComplete}>Сделал!</button>
            </div>
        </div>
    )
}

export default EditFrom
