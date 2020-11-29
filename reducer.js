// Reducer
function calculator (state, action) {
    if (state === undefined) {
        return { value: '' };
    }

    var value = state.value;

    switch (action.type) {
        case 'write':
            if (value === '' && action.newValue === '0') return { value: '' }
            return { value: value + action.newValue };
        
        case 'evaluate':
            var answer = '';
            try {
                answer = parseFloat(parseFloat(eval(value)).toPrecision(12)).toString();
            } catch (e) {
                answer = 'erro';
            }
            return { value: answer };

        case 'clean':
            return { value: '' };
        
        default:
            return state;
    }
}

export default calculator;