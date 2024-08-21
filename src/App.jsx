import { Header } from './Components/Header/header';
import './App.css';
import { Footer } from './Components/Footer/footer';
import { ChooseOptions } from './Components/ChoosingOptions/options';
import { DeliveryPage } from './Components/DeliveryComponent/Deliverpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FoodDeliversItems } from './Components/DeliveryComponent/FoodDeliveringHotels/DeliveryFoodItems';

import { OptionsContextProvider } from './Contexts/context';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <OptionsContextProvider>
      <Header />
      <ChooseOptions />
      <Routes>
        <Route path='/delivery' element={ <DeliveryPage /> }></Route>
        <Route path='/delivery/:item' element={ <FoodDeliversItems /> } />
      </Routes>
      <Footer />
      </OptionsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
