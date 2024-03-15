import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import PropTypes from 'prop-types';

const SingleMenuItem = ({ menuItem, handleWantToCookItemFun }) => {
    const { recipe_name, short_description, recipe_image, ingredients, preparing_time, calories } = menuItem;
    return (
        <div>

            <div className="card bg-base-100 shadow-xl">
                <figure className="px-8 pt-8">
                    <img src={recipe_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title mb-2">{recipe_name}</h2>
                    <p>{short_description}</p>

                    <div className="divider"></div>
                    <h2 className="mb-2 font-semibold">Ingredients: {ingredients.length}</h2>
                    <ul className="">
                        {
                            ingredients.map((item, index) =>

                                <li key={index}> . {item}</li>)
                        }

                    </ul>
                    <div className="divider"></div>
                    <div className="flex gap-6 mb-6">
                        <div className="flex items-center gap-2">
                            <div><CiClock2 /> </div>
                            <div>{preparing_time}</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div><FaFire /> </div>
                            <div>{calories}</div>
                        </div>
                    </div>


                    <div className="card-actions">
                        <button onClick={() => handleWantToCookItemFun(menuItem)} className="btn btn-success rounded-full font-semibold">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleMenuItem.propTypes = {
    menuItem: PropTypes.obj,
    handleWantToCookItemFun: PropTypes.func,
};
export default SingleMenuItem;