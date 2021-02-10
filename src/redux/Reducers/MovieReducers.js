import { SET_EDITED, FETCH_MOVIE_LIST, EDIT_MOVIE, SET_POPUP } from "redux/Constants/MovieConstants";

const initialState = {
    movieInfor: {},
    selectedMovie: {},
    isPopUp: false,
    typePopUp: '',
    isEdited: false,
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_MOVIE_LIST:
            state = { ...state, movieInfor: payload };
            return { ...state };
        case EDIT_MOVIE:
            state = { ...state, ...payload };
            return { ...state };
        case SET_EDITED:
            state = { ...state, isEdited: payload };
            return { ...state };
        case SET_POPUP:
            state = { ...state, isPopUp: payload };
            return { ...state };
        default:
            return state;
    }
}

export default reducer;