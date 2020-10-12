import { createStore } from "redux";
import "./../styles/style.scss"
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            };
        case "DECREMENT":
            return {
                count: state.count - 1
            };
        case "RESET":
            return {
                count: 0
            };
        default:
            return "I don't no what you are doing"
    }
});
store.dispatch({
    "type": "INCREMENT"
});
store.dispatch({
    "type": "DECREMENT"
});
store.dispatch({
    "type": "RESET"
})
