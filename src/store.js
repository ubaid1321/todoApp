import { createStore } from "redux";
import rootreducers from "./redux/actions/reducers/Main";
const store =createStore(
    rootreducers

    )
    export default store