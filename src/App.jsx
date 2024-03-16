
import { useState } from 'react'
import './App.css'
import MenuItems from './components/MenuItems/MenuItems'
import WantToCook from './components/WantToCook/WantToCook'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import RecipesHeding from './components/RecipesHeding/RecipesHeding'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [wantToCookItems, setWantToCookItems] = useState([]);
  const [cookingItems, setCookingItems] = useState([]);


  const handleWantToCookItemFun = (wantToCookData) => {
    const isExitsMenuItem = wantToCookItems.find(item => item.recipe_id == wantToCookData.recipe_id)
    if (!isExitsMenuItem) {
      setWantToCookItems([...wantToCookItems, wantToCookData])
    } else {
      toast("Already exists");
    }
  }

  const handleWantToCookDataRemoveFun = (wantToCookRemoveData) => {
    setCookingItems([...cookingItems, wantToCookRemoveData]);
    const afterDeleteWantToCook = wantToCookItems.filter(item => item.recipe_id != wantToCookRemoveData.recipe_id);
    setWantToCookItems(afterDeleteWantToCook);
    toast("Cooking");
  }



  return (
    <>


      <Header></Header>

      <Slider></Slider>

      <div className='container mx-auto'>

        <RecipesHeding></RecipesHeding>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
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

      <ToastContainer />
    </>
  )
}

export default App
