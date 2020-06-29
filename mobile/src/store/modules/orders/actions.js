export function Request(id, status = 'all', page = 1, oldOrders = []) {
    return {
        type: '@orders/REQUEST',
        payload: { id, status, page, oldOrders },
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
