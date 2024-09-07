import './header.css';
import  SearchOutlined  from '@mui/icons-material/SearchOutlined';
import  Room  from '@mui/icons-material/Room';
import { useCity } from '../../Contexts/citySelect';
import { useState } from 'react';
import { SearchItems } from '../../Data/data';
export function Header(){
    const {selectCity,setCity} = useCity();
    const [searchingitem,setsearchingItem]=useState(" ");
    function SettingCity(e){
        setCity(e.target.value);
    }
    function SearchingItems(e){
        let str=e.target.value;
        console.log(str)
    }
    return (
        <div id="header-container">
                <p id='tomato-header'>Tomato</p>
                <div id='input-boxes'>   
                    <div id='select-elem-container'>
                        <div id='search-input-entire-div'>
                            <div id='select-tag-div'> 
                                <select id='select-tag' value={selectCity} onChange={SettingCity} >
                                    <option value="Please Select a city" disabled>Select A City</option>
                                    <option value="Chennai" >Chennai</option>
                                    <option value="Madurai" >Madurai</option>
                                    <option value="Bengaluru" >Bengaluru</option>
                                    <option value="Mumbai">Mumbai</option>
                                </select>
                                <span id='location-icon'><Room /></span>
                           </div>
                           <div id='search-item-input-container'>
                                <div id='search-input-container'>
                                    <input type='text' id='search-input' onChange={SearchingItems} placeholder='Search for Restaurant or Dish' />
                                    <span id='search-glass'><SearchOutlined /> </span>
                                </div>
                                <div id='search-items-container'>
                                    <p>Hello</p>    
                                    <p>Hello</p><p>Hello</p>
                                    <p>Hello</p>
                                </div>
                            </div>
                        </div>
                    </div>              
                </div>
                <p id='login-p'>Log in</p>
                <p id='signup-p'>Sign up</p>
        </div>
    )
}