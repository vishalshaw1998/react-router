import React, { useContext, useRef } from "react";
import ListBody from "./ListBody";
import { TodoContext } from "./App";

function Todo() {
    const inputValue = useRef();
    const { settodo, todo } = useContext(TodoContext);
    function handleClick() {
        settodo([...todo, inputValue.current.value]);
        inputValue.current.value = "";
    }
    return (
        <div>
            <input
                ref={inputValue}
                type="text"
                className="form-control mt-3"
                name=""
                id=""
            />
            <button
                className="btn btn-primary btn-block mt-4"
                onClick={handleClick}
            >
                Add
            </button>
            <ListBody />
        </div>
    );
}

export default Todo;
