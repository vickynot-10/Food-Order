import { Header } from './Components/Header/header';
import './App.css';
import { Footer } from './Components/Footer/footer';
import { ChooseOptions } from './Components/ChoosingOptions/options';
import { DeliveryPage } from './Components/DeliveryComponent/Deliverpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FoodDeliversItems } from './Components/DeliveryComponent/FoodDeliveringHotels/DeliveryFoodItems';
import { HotelPage } from './Components/DeliveryComponent/HotelComponents/HotelPage';
import { CityNameProvider } from './Contexts/citySelect';
import { OptionsContextProvider } from './Contexts/context';
import { useEffect } from 'react';
import axios from 'axios';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CityNameProvider>
      <OptionsContextProvider>
      <Header />
      <ChooseOptions />
      <Routes>
        <Route path='/delivery' element={ <DeliveryPage /> } />
        <Route path='/delivery/food/:item' element={ <FoodDeliversItems /> } />
        <Route path='/delivery/hotel/:hotelPage' element={ <HotelPage /> } />
      </Routes>
      <Footer />
      </OptionsContextProvider>
      </CityNameProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
