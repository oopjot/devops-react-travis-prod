
const PizzaItem = ({ name, ingredients }) => {
    return (<>
        <li>
            {name}
            <ul>
                {ingredients.map((i, index) => <li key={index}>{i}</li>)}
            </ul>
        </li>
    </>)
}

export default PizzaItem;