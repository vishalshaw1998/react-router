import React, { useContext } from "react";
import { TodoContext } from "./App";

function ListBody() {
    const { todo, settodo } = useContext(TodoContext);
    function handleDelete(index) {
        settodo((prevState) => {
            return prevState.filter((item, idx) => {
                return idx !== index;
            });
        });
    }
    return (
        <div className="mt-4">
            {todo.map((item, index) => {
                return (
                    <div key={index}>
                        <li className="list-group-item mt-4">{item}</li>
                        <button
                            className="btn btn-danger mt-1"
                            onClick={() => handleDelete(index)}
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default ListBody;
