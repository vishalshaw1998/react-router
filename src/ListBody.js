import React from "react";
import { connect } from "react-redux";

function ListBody(props) {
    return (
        <div className="mt-4">
            {props.todo.map((item, index) => {
                return (
                    <div key={index}>
                        <li className="list-group-item mt-4">{item}</li>
                        <button
                            className="btn btn-danger mt-1"
                            onClick={() => props.deleteTodo(index)}
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todo: state.todos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: function (index) {
            return dispatch({ type: "DELETE_TODO", id: index });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListBody);
