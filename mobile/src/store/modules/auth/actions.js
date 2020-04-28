export function signInRequest(id) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { id },
    };
}

export function signInSuccess(data) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { data },
    };
}

export function signInFailure() {
    return {
        type: '@auth/SIGN_IN_FAILURE',
    };
}
