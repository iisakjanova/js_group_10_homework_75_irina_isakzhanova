import axiosApi from "../../axiosApi";

export const SET_MESSAGE_DATA = 'SET_MESSAGE_DATA';

export const ENCODE_MESSAGE_REQUEST = 'ENCODE_MESSAGE_REQUEST';
export const ENCODE_MESSAGE_SUCCESS = 'ENCODE_MESSAGE_SUCCESS';
export const ENCODE_MESSAGE_FAILURE = 'ENCODE_MESSAGE_FAILURE';

export const setMessageData = (name, value) => ({type: SET_MESSAGE_DATA, payload: {name, value}});

export const encodeMessageRequest = () => ({type: ENCODE_MESSAGE_REQUEST});
export const encodeMessageSuccess = response => ({type: ENCODE_MESSAGE_SUCCESS, payload: response});
export const encodeMessageFailure = error => ({type: ENCODE_MESSAGE_FAILURE, payload: error});

export const encodeMessage = () => {
    return async (dispatch, getState) => {
        const message = getState().message;
        const text = message.decoded;
        const password = message.password;

        try {
            dispatch(encodeMessageRequest());
            const response = await axiosApi.post('/encode', {text, password});
            dispatch(encodeMessageSuccess(response.data));
        } catch (error) {
            dispatch(encodeMessageFailure(error));
        }
    };
};
