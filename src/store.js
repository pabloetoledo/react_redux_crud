import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers';//Como el archivo a importar se llama index no hace falta explicitarlo

const store = createStore(
    reducer,
    compose( applyMiddleware(thunk),
        //Este codigo permite que la app funcione si el navegador tiene o no instalado redux-dev-tools
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                        window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;

