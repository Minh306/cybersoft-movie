import { SET_EDITED, FETCH_MOVIE_LIST, EDIT_MOVIE, SET_POPUP, SET_CREATED, CREATE_MOVIE, SET_DELETED
 } from "redux/Constants/MovieConstants";

const initialState = {
    movieInfor: {},
    selectedMovie: {},
    isPopUp: false,
    typePopUp: '',
    isEdited: false,
    isCreated: false,
    isDeleted: false,
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_MOVIE_LIST:
            state = { ...state, movieInfor: payload };
            return { ...state };
        case EDIT_MOVIE:
            state = { ...state, ...payload };
            return { ...state };
        case CREATE_MOVIE:
            state = { ...state, ...payload };
            return { ...state };
        case SET_EDITED:
            state = { ...state, isEdited: payload };
            return { ...state };
        case SET_DELETED:
            state = { ...state, isDeleted: payload };
            return { ...state };
        case SET_CREATED:
            state = { ...state, isCreated: payload };
            return { ...state };
        case SET_POPUP:
            state = { ...state, isPopUp: payload };
            return { ...state };
        default:
            return state;
    }
}

export default reducer;