import { createStore } from "redux";
import { initState } from "./reducer";

const myStore = createStore(initState);

export default myStore;
