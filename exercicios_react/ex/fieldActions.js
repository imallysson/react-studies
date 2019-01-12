export function changeValue(e) {
    console.log('changeValue')
    return {
        type: 'VALUE_CHANGE',
        payload: e.target.value
    }
}