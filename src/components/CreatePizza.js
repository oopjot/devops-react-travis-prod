import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addPizza } from "../actions/pizzas";

const CreatePizza = ( {ingredients, pizzas, onAddPizza} ) => {

    const handleSubmit = (values) => {
        if (pizzas.some(p => values.name === p.name)) {
            console.log("Taka juz jest")
        } else {
            onAddPizza({
                id: uuidv4(),
                ...values
            })
            console.log(pizzas)
        }
    };

    const initialValues = {
        name: "",
        dough: "thin",
        ingredients: []
    }
    return (<div style={{margin: "50px"}}>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {(formProps) => (
                <Form>
                    Name:
                    <Field type="text" name="name" /> <br />
                    Dough:
                    <Field type="radio" name="dough" value="thin"/>
                    Thin
                    <Field type="radio" name="dough" value="fat"/>
                    Fat

                    <ul>
                    {ingredients.map(i => <li key={i.id}><Field type="checkbox" name="ingredients" value={i.name} />{i.name}</li>)}
                    </ul>
                    <button type="submit">Create</button>
                </Form>
            )}
        </Formik>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        pizzas: state.pizzas
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPizza: (payload) => {
            dispatch(addPizza(payload));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePizza);