import produce from 'immer';

const INITIAL_STATE = {
    signed: false,
    loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case '@auth/SIGN_IN_REQUEST': {
                draft.signed = true;
                break;
            }
            default:
        }
    });
}
