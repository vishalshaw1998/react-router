import React, { useRef } from "react";
import ListBody from "./ListBody";
import { connect } from "react-redux";

function Todo(props) {
    const inputValue = useRef();
    function handleClick() {
        if (inputValue.current.value !== "") {
            props.addTodo(inputValue.current.value);
            inputValue.current.value = "";
        }
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
                onClick={() => {
                    handleClick();
                }}
            >
                Add
            </button>
            <ListBody />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: function (todoItem) {
            return dispatch({ type: "ADD_TODO", todo: todoItem });
        },
    };
};

export default connect(null, mapDispatchToProps)(Todo);
