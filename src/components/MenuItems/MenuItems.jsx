import { useState } from "react";
import SingleMenuItem from "../SingleMenuItem/SingleMenuItem";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const MenuItems = ({ handleWantToCookItemFun }) => {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('./foodFackData.json')
            .then(res => res.json())
            .then(data => setMenuItems(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-6 md:p-0'>
            {
                menuItems.map(menuItem => <SingleMenuItem
                    key={menuItem.recipe_id}
                    menuItem={menuItem}
                    handleWantToCookItemFun={handleWantToCookItemFun}
                ></SingleMenuItem>)
            }

        </div>
    );
};
MenuItems.propTypes = {
    handleWantToCookItemFun: PropTypes.func
};
export default MenuItems;