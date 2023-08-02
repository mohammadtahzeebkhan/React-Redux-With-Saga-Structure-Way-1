//now let code in stor.js 
// it nothing but collection of all saga and reducer 
//
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer';
import { applyMiddleware,compose ,createStore} from 'redux';
//new 

//
// first we will create middleWare
import rootSaga from './rootSaga';

const sagaMidalleWare=createSagaMiddleware()
// enbale Redux Devtool which help to devloper understand redux via ui format

// this line window.__REDUX_DECTOOLS_EXTENSION_COMPOSE__ when work when yiu have install Redux devtool in chrome browser
const devtool=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

// now final make global store
const store= createStore(
    rootReducer,
    devtool(applyMiddleware(sagaMidalleWare))

);

// run the rootsaga to start listening to action
sagaMidalleWare.run(rootSaga)

export default store

// now can see in dev tool something are there but global state not using because 
// til we not set store in root of project which index.js and and no call of action
// add stor into root file which index.js
