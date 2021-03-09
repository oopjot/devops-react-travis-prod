
import { connect } from "react-redux";
import { deletePizza } from "../actions/pizzas";
import PizzaItem from "./PizzaItem";

const Pizzas = ({ pizzas, onDeletePizza }) => {

    return (<div style={{margin: "50px"}}>
        <p>Pizzas:</p>
        <ul>
            {pizzas.map((p, index)=> <><PizzaItem key={p.id} name={p.name} ingredients={p.ingredients} /><button key={index} onClick={() => onDeletePizza({id: p.id})}>X</button></>)}
        </ul>
    </div>);
};

const mapStateToProps = (state) => {
    return {
        pizzas: state.pizzas
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeletePizza: (payload) => {
            dispatch(deletePizza(payload))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pizzas);