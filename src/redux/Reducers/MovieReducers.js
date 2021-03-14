import {
    SET_LOADED, FETCH_MOVIE_SHOWTIME, SEARCH_MOVIE, SET_EDITED, FETCH_MOVIE_LIST, EDIT_MOVIE, SET_POPUP, SET_CREATED, CREATE_MOVIE, SET_DELETED
} from "redux/Constants/MovieConstants";

const initialState = {
    movieInfor: [],
    movieSearch: {},
    selectedMovie: {},
    movieDetail: {},
    isPopUp: false,
    isLoaded: false,
    typePopUp: '',
    isEdited: false,
    isCreated: false,
    isShowtime: false,
    isDeleted: false,
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_MOVIE_LIST:
            state = { ...state, movieInfor: payload };
            return { ...state };
        case FETCH_MOVIE_SHOWTIME:
            state = { ...state, movieDetail: payload };
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
        case SET_LOADED:
            state = { ...state, isLoaded: payload };
            return { ...state };
        case SEARCH_MOVIE:
            state = { ...state, movieSearch: payload };
            return { ...state };
        default:
            return state;
    }
}

export default reducer;