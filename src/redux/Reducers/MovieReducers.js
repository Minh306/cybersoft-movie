import {
    FETCH_MOVIE_LIST
} from "../Constants/MovieConstants";

const initialState = {
    movieInfor: {},
    selectedMovie: {},
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_MOVIE_LIST:
            state = { ...state, movieInfor: payload };
            return { ...state };
        default:
            return state;
    }
}

export default reducer;