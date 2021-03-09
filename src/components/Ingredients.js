import { connect } from "react-redux";

const Ingredients = ({ ingredients }) => {
    return (
        <div style={{margin: "50px"}}>
            <p>Ingredients:</p>
            <ul>
                {ingredients.map(i => <li key={i.id}>{i.name}</li>)}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients
    };
};

export default connect(mapStateToProps)(Ingredients);

