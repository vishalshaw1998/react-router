import React, { useContext, useRef } from "react";
import { PostContext } from "./App";

function Timeline() {
    const { post, setPost } = useContext(PostContext);
    const postBox = useRef();
    let workingNode = null;
    let commentIndex = null;
    function handleAddPost() {
        if (postBox.current.value !== "") {
            setPost([
                ...post,
                {
                    title: postBox.current.value,
                    comments: [],
                    likes: 0,
                    dislikes: 0,
                },
            ]);
            postBox.current.value = "";
        }
    }
    function handleOnchange(node, idx) {
        workingNode = node;
        commentIndex = idx;
    }
    function handleAddComment(idx) {
        if (idx === commentIndex && workingNode.value !== "") {
            let tempPost = [...post];
            tempPost[idx].comments.push(workingNode.value);
            setPost(tempPost);
            workingNode.value = "";
        } else {
            return;
        }
    }
    function handleLike(idx) {
        let tempPost = [...post];
        tempPost[idx].likes += 1;
        setPost(tempPost);
    }
    function handleDislike(idx) {
        let tempPost = [...post];
        tempPost[idx].dislikes += 1;
        setPost(tempPost);
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
                    onClick={handleAddPost}
                >
                    Add
                </button>
                {post.map((item, index) => {
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
                                        onClick={() => {
                                            handleLike(index);
                                        }}
                                    >
                                        Like
                                    </button>
                                </span>
                                <span className="ml-3">{item.dislikes}</span>
                                <span className="ml-3">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => {
                                            handleDislike(index);
                                        }}
                                    >
                                        Dislike
                                    </button>
                                </span>
                            </div>
                            <div>
                                <div className="form-group mt-3">
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        onChange={(e) => {
                                            handleOnchange(e.target, index);
                                        }}
                                    ></textarea>
                                </div>
                                <button
                                    className="btn btn-primary mb-2"
                                    onClick={() => handleAddComment(index)}
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

export default Timeline;
