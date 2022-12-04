import './categories.styles.scss';
import Cards from "../cards/Cards"

function Directory ({categories}){
    return(
        <div className="categories-container">
            {categories.map((category) =>                                 
                <Cards key = {category.id}  category={category} />     
            )}
        </div>
    )
}
export default Directory