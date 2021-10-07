import {
    SET_MESSAGE_DATA,
    ENCODE_MESSAGE_FAILURE,
    ENCODE_MESSAGE_REQUEST,
    ENCODE_MESSAGE_SUCCESS, DECODE_MESSAGE_REQUEST, DECODE_MESSAGE_SUCCESS, DECODE_MESSAGE_FAILURE
} from "../actions/actions";

const initialState = {
    message: {
        decoded: '',
        password: '',
        encoded: ''
    },
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE_DATA:
            return {
                ...state,
                message: {
                    ...state.message,
                    [action.payload.name]: action.payload.value,
                },
            };
        case ENCODE_MESSAGE_REQUEST:
            return {...state, loading: true};
        case ENCODE_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                message: {
                    ...state.message,
                    encoded: action.payload,
                },
            };
        case ENCODE_MESSAGE_FAILURE:
            return {...state, loading: false, error: action.payload};
        case DECODE_MESSAGE_REQUEST:
            return {...state, loading: true};
        case DECODE_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                message: {
                    ...state.message,
                    decoded: action.payload,
                },
            };
        case DECODE_MESSAGE_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default reducer;