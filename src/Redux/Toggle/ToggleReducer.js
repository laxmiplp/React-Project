const initialState = {
    isOn: false
}

const ToggleReducer = (state = initialState, action) => {


    <h1>Toggle Reducer</h1>
    switch (action.type) {
        case 'TOGGLE_SWITCH':
            return { ...state, isOn: !state.isOn }
        default:
            return state
    }




}
export default ToggleReducer