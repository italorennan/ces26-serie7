import { connect } from 'react-redux';
import Calculator from './Calculator.js';

// Mapear Redux state para props do componente
function mapStateToProps (state) {
    return {
        valueExhibited: state.value
    };
}

// Ações
const writeAction = newValue => {
    return {
        type: 'write',
        newValue: newValue
    };
}
const evaluateAction = () => {
    return {
        type: 'evaluate'
    };
}
const cleanAction = () => {
    return {
        type: 'clean'
    };
}

// Mapear ações Redux para props do componente
function mapDispatchToProps (dispatch) {
    return {
        write: function(newValue) {
            return dispatch(writeAction(newValue));
        },
        evaluate: function() {
            return dispatch(evaluateAction());
        },
        clean: function() {
            return dispatch(cleanAction());
        }
    };
}

// Connect
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
) (Calculator);

export default connectedComponent;