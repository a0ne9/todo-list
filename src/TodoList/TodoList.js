import React from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css"

function TodoList(props) {

    const ref = React.useRef(null);
    const resizerRef = React.useRef(null);
    const [searchedTodos, setSearchedTodos] = React.useState([])
    const [name, setName] = React.useState("")

    React.useEffect(()=> {
        const el = ref.current;
        // получаем ширину элемента
        const styles = window.getComputedStyle(el);
        let width = parseInt(styles.width, 10);
        let x = 0;

        // Вешаем обработчики при нажатии на ресайзер
        const onMouseDown = (e) => {
            x = e.clientX;
            el.style.right=null
            document.addEventListener("mousemove", mouseMoveResize);
            document.addEventListener("mouseup", mouseUp);
        }

        // Изменение ширины мышкой
        const mouseMoveResize = (e) => {
            const xx = e.clientX - x;
            x = e.clientX;
            width = width + xx;
            el.style.width = `${width}px`;
        };

        // Снимаем обработчик при отпускании кнопки мыши
        const mouseUp = () => {
            document.removeEventListener("mousemove", mouseMoveResize)
        }

        const resizer = resizerRef.current
        resizer.addEventListener("mousedown", onMouseDown)

        return() => {
            resizer.removeEventListener("mousedown", onMouseDown);
        }
    }, [])


    return(
        <div className="todo__list-container" >
            <input
                type="text"
                className="todo__search-input"
                value={name || ""}
                placeholder="Поиск по названию"
                onChange={(e) => { setName(e.target.value)}} />
            <ul className="todo__list" ref={ref}>
                {props.todos.filter(todo => {
                    if (name == "") {
                        return todo
                    } else if (todo.text.toLowerCase().includes(name.toLowerCase())) {
                        return todo
                    }
                }).map(todo =>
                    (<Todo
                        text={todo.text}
                        completed={todo.started}
                        key={todo.id}
                        onEditClick={props.onEditClick}
                        todo={todo}
                        onDelete={props.onDelete}
                    />)
                )}
            </ul>
            <div ref={resizerRef} className="todo__list-resizer"></div>
        </div>
    )
}

export default TodoList;
