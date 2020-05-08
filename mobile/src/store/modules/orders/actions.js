export function Request(id, status = 'all') {
    return {
        type: '@orders/REQUEST',
        payload: { id, status },
    };
}

export function Success(data) {
    return {
        type: '@orders/SUCCESS',
        payload: { data },
    };
}

export function Failure() {
    return {
        type: '@orders/FAILURE',
    };
}
