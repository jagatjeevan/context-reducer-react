import { ContextData } from "./ContextData";

const reducer = (state, action) => {
    switch(action.type) {
        case "add-blogpost":
            return [...state, {id: state.length+1, title: `title ${state.length+1}`}];
        case "delete-blogpost":
            return state.filter(blogPost => blogPost.id !== action.payload);
        default:
            return [...state];
    }
}

const addBlogPost = (dispatch) => () => dispatch({type: "add-blogpost"});

const deleteBlogPost = (dispatch) => (id) => dispatch({type: "delete-blogpost", payload: id});

export const {Context, Provider} = ContextData(reducer, {addBlogPost, deleteBlogPost}, []);