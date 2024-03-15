import PropTypes from 'prop-types';

const Cooking = ({ cookingItems }) => {
    return (
        <div>
            <div>
                <div className="text-center px-8">
                    <h1 className="font-bold">Want to cook : {cookingItems.length}</h1>
                    <div className="divider"></div>
                </div>

                <div>
                    <div className="">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cookingItems.map((cookingItem, index) => {
                                        return (
                                            <tr className="hover" key={index} >
                                                <td>{index + 1}</td>
                                                <td>{cookingItem.recipe_name}</td>
                                                <td>{cookingItem.preparing_time}</td>
                                                <td>{cookingItem.calories}</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
Cooking.propTypes = {
    cookingItems: PropTypes.array,

};
export default Cooking;