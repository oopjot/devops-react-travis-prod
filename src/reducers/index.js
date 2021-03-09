import { combineReducers } from "redux";
import ingredients from "./ingredients";
import pizzas from "./pizzas";


const reducer = combineReducers({pizzas, ingredients});

export default reducer;