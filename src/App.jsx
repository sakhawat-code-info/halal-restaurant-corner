
import { useState } from 'react'
import './App.css'
import MenuItems from './components/MenuItems/MenuItems'
import WantToCook from './components/WantToCook/WantToCook'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'



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


      <Header></Header>

      <Slider></Slider>

      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-[#150B2B] text-4xl font-semibold md:mb-6'>Our Recipes</h1>
          <p className='text-[#150B2B99]  items-center'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <div className=' col-span-2'>

            <MenuItems handleWantToCookItemFun={handleWantToCookItemFun}></MenuItems>

          </div>


          <div className='border py-8 rounded-2xl h-min'>
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
