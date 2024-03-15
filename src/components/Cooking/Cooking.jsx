import PropTypes from 'prop-types';

const Cooking = ({ cookingItems }) => {
    return (
        <div>
            <div>
                <div className="text-center px-8">
                    <h1 className="font-bold">Currently cooking : {cookingItems.length}</h1>
                    <div className="divider"></div>
                </div>

                <div>
                    <div className="">
                        <table className="table ">
                            <thead>
                                <tr className='text-[#878787] text-base mb-4'>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody className='text-[#282828B3]'>
                                {
                                    cookingItems.map((cookingItem, index) => {
                                        return (
                                            <tr className="hover" key={index} >
                                                <td>{index + 1}</td>
                                                <td>{cookingItem.recipe_name}</td>
                                                <td>{cookingItem.preparing_time} minutes</td>
                                                <td>{cookingItem.calories} calories</td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td className='text-[#282828CC] font-medium'>Total Time = {cookingItems.reduce((p, c) => p + c.preparing_time, 0)} minutes</td>
                                    <td className='text-[#282828CC] font-medium'>Total Calories = {cookingItems.reduce((p, c) => p + c.calories, 0)} calories</td>
                                </tr>

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