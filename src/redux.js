import rootReducer from "./store/reducers/rootReducer";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {persistStore} from "redux-persist"

//using thunk to return an array
const reduxConfig = () => {
    const store  = createStore(rootReducer, applyMiddleware(thunk))
    const persistor = persistStore(store)

    return {store, persistor}
}

export default reduxConfig