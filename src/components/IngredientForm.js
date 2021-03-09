import { useState } from "react"
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addIngredient } from "../actions/ingredients";


const IngredientForm = ( { ingredients, onAddIngredient } ) => {
    
    const [newIngredient, setNewIngredient] = useState("");
    const [err, setErr] = useState("");

    return (<div style={{border: "solid black 1px", margin: "50px"}}>
        <p>Add ingredient: </p> <br />
        <input type="text" value={newIngredient} onChange={(e) => setNewIngredient(e.target.value)} /> <br />
        <p color="red">{err}</p>
        <button onClick={() => {
            if (ingredients.some(i => i.name === newIngredient)) {
                setErr("Ingredient already added!")
            } else {
                onAddIngredient({id: uuidv4(), name: newIngredient});
                setNewIngredient("");
                setErr("");
            };
        }} >
            Add
        </button>
        {ingredients.length}
    </div>);
};

const mapStateToProps = (state) => {
    return { 
        ingredients: state.ingredients 
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddIngredient: (payload) => {
            dispatch(addIngredient(payload));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientForm);