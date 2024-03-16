import PropTypes from 'prop-types';
import Cooking from '../Cooking/Cooking';

const WantToCook = ({ wantToCookItems, handleWantToCookDataRemoveFun, cookingItems }) => {

    // console.log(cookingItems);

    return (
        <div className="">
            <div className='mb-8'>
                <div className="text-center px-8">
                    <h1 className="font-bold">Want to cook : {wantToCookItems.length}</h1>
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
                                    wantToCookItems.map((wantToCookItem, index) => {
                                        return (
                                            <tr className="hover" key={index} >
                                                <td className='font-bold'>{index + 1}</td>
                                                <td>{wantToCookItem.recipe_name}</td>
                                                <td>{wantToCookItem.preparing_time} minutes</td>
                                                <td>{wantToCookItem.calories} calories</td>
                                                <td className='p-0'><button onClick={() => handleWantToCookDataRemoveFun(wantToCookItem)} className="btn bg-[#0BE58A] border-[#0BE58A] rounded-full font-semibold">Preparing</button></td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <div className="text-center p-8">
                <h1 className="font-bold">Currently cooking : {wantToCookItems.length}</h1>
                <div className="divider"></div>
            </div> */}
            <Cooking cookingItems={cookingItems}></Cooking>

        </div>
    );
};
WantToCook.propTypes = {
    wantToCookItems: PropTypes.array,
    handleWantToCookDataRemoveFun: PropTypes.func,
    cookingItems: PropTypes.array,

};
export default WantToCook;