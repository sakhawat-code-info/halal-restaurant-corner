
import { useState } from 'react'
import './App.css'
import MenuItems from './components/MenuItems/MenuItems'
import WantToCook from './components/WantToCook/WantToCook'


function App() {

  const [wantToCookItems, setWantToCookItems] = useState([]);
  const [cookingItems, setCookingItems] = useState([]);


  const handleWantToCookItemFun = (wantToCookData) => {
    const isExitsMenuItem = wantToCookItems.find(item => item.recipe_id == wantToCookData.recipe_id)
    if (!isExitsMenuItem) {
      setWantToCookItems([...wantToCookItems, wantToCookData])
    } else {
      alert('already cooking');
    }
  }

  const handleWantToCookDataRemoveFun = (wantToCookRemoveData) => {
    setCookingItems([...cookingItems, wantToCookRemoveData]);
    const afterDeleteWantToCook = wantToCookItems.filter(item => item.recipe_id != wantToCookRemoveData.recipe_id);
    setWantToCookItems(afterDeleteWantToCook);
  }



  return (
    <>

      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-6'>
          <div className=' col-span-2'>

            <MenuItems handleWantToCookItemFun={handleWantToCookItemFun}></MenuItems>

          </div>


          <div className='border py-8'>
            <WantToCook
              wantToCookItems={wantToCookItems}
              handleWantToCookDataRemoveFun={handleWantToCookDataRemoveFun}
              cookingItems={cookingItems}
            ></WantToCook>
          </div>

        </div>
      </div>


    </>
  )
}

export default App
