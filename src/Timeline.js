import React, { useRef } from "react";
import { connect } from "react-redux";

function Timeline(props) {
    const postBox = useRef();
    let currentCommentBox = null;
    let currentCommentBoxIndex = null;
    function handleAddPost() {
        if (postBox.current.value !== "") {
            props.addPost(postBox.current.value);
            postBox.current.value = "";
        }
    }
    function changeTarget(node, index) {
        currentCommentBox = node;
        currentCommentBoxIndex = index;
    }
    function addComment(index) {
        if (
            currentCommentBoxIndex === index &&
            currentCommentBox.value !== ""
        ) {
            props.addComment(currentCommentBox.value, index);
            currentCommentBox.value = "";
        }
    }
    return (
        <div>
            <div className="form-group mt-4">
                <div className="text-center">
                    <label htmlFor="exampleFormControlTextarea1">
                        Whats On Your Mind?
                    </label>
                </div>
                <textarea
                    ref={postBox}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
                <button
                    className="btn btn-block btn-primary mt-2"
                    onClick={() => {
                        handleAddPost();
                    }}
                >
                    Add
                </button>
                {props.post.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="container border border-muted mt-3"
                        >
                            <div className="font-weight-bold">{item.title}</div>
                            <div className="mt-2">
                                <span>{item.likes}</span>
                                <span className="ml-3">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => props.addLike(index)}
                                    >
                                        Like
                                    </button>
                                </span>
                                <span className="ml-3">{item.dislikes}</span>
                                <span className="ml-3">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => {
                                            props.addDislike(index);
                                        }}
                                    >
                                        Dislike
                                    </button>
                                </span>
                                <span
                                    className="font-weight-bold"
                                    style={{ float: "right" }}
                                >
                                    Posted On {item.time}
                                </span>
                            </div>
                            <div>
                                <div className="form-group mt-3">
                                    <textarea
                                        onChange={(e) =>
                                            changeTarget(e.target, index)
                                        }
                                        className="form-control"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <button
                                    className="btn btn-primary mb-2"
                                    onClick={() => {
                                        addComment(index);
                                    }}
                                >
                                    Add Comment
                                </button>
                            </div>
                            <div className="comment">
                                {item.comments.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="list-group-item mb-1"
                                        >
                                            {item}
                                        </li>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        post: state.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: function (post) {
            return dispatch({ type: "ADD_POST", title: post });
        },
        addLike: function (index) {
            return dispatch({ type: "ADD_LIKE", id: index });
        },
        addDislike: function (index) {
            return dispatch({ type: "ADD_DISLIKE", id: index });
        },
        addComment: function (comment, index) {
            return dispatch({
                type: "ADD_COMMENT",
                id: index,
                comment: comment,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
