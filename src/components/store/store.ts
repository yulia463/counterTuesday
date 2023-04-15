import {combineReducers, compose, legacy_createStore} from "redux";
import {CounterReducer} from "../localStorage/reducer/reducer";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer = combineReducers({
    counter: CounterReducer
})

let preloadedState
const persistedTodosString = localStorage.getItem("app-state")
if ( persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = legacy_createStore(rootReducer, preloadedState, composeEnhancers())


store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})


export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store