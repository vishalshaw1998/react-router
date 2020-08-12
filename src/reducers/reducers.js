const initialStateForPost = [
    {
        title: "Hello World",
        comments: ["Hey"],
        likes: 0,
        dislikes: 0,
    },
];

const initialStateForTodo = ["Watching TV", "Playing Games"];

export const timelineReducer = (state = initialStateForPost, action) => {
    switch (action.type) {
        case "ADD_POST":
            return [
                ...state,
                { title: action.title, comments: [], likes: 0, dislikes: 0 },
            ];
        case "ADD_LIKE":
            let tempState = [...state];
            tempState[action.id].likes += 1;
            return tempState;
        case "ADD_DISLIKE":
            let newState = [...state];
            newState[action.id].dislikes += 1;
            return newState;
        case "ADD_COMMENT":
            let newState2 = [...state];
            newState2[action.id].comments.push(action.comment);
            return newState2;
        default:
            return state;
    }
};

export const todoReducer = (state = initialStateForTodo, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.todo];
        case "DELETE_TODO":
            return state.filter((item, index) => action.id !== index);
        default:
            return state;
    }
};
