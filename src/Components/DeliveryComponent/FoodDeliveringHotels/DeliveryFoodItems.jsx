
import './FoodItemDeliver.css';
import { useParams } from "react-router-dom";
import  Star  from "@mui/icons-material/Star";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlined from '@mui/icons-material/AddOutlined'
import { useCity } from "../../../Contexts/citySelect";
import { useEffect, useState } from "react";

import Check from "@mui/icons-material/Check";
import  Alert  from "@mui/material/Alert";

import { CircularProgress } from '@mui/material';
import axios from 'axios';

export function FoodDeliversItems(){
    const [foods,setFoodData]=useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { item }=useParams();
    let foodName = item.toLowerCase()

    useEffect(()=>{
        async function fetchdata(){
            try{
            let res = await axios.get(`http://localhost:4040/delivery/food/${foodName}`)
            if(!res){
                throw new Error('Network response was not ok')
             }
           
            setFoodData(res.data)
            }catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchdata()
    },[]) 
    const [isClick,setClick]=useState({});
    const [quantity,setQuantity]=useState({});
    
    const [showAdd,setAdd]=useState({})
        function AddFood(key) {
            setClick(prev => ({ ...prev, [key._id]: true }));
            setAdd(prev => ({ ...prev, [key._id]: false }));
            setQuantity(prev => ({ ...prev, [key._id]: (prev[key._id] || 0) + 1 }));
        }
        
    

        function IncreaseFood(key) {
            setQuantity(prev => ({ ...prev, [key._id]: (prev[key._id] || 0) + 1 }));
        }
        
        function DecreaseFood(key) {
            setQuantity(prev => {
                const newQuantity = (prev[key._id] || 0) - 1;
                if (newQuantity <= 0) {
                    setClick(prev => ({ ...prev, [key._id]: false }));
                    setAdd(prev => ({ ...prev, [key._id]: true }));
                }
                return { ...prev, [key._id]: Math.max(newQuantity, 0) };
            });
        }
        
    const {selectCity} = useCity()
    
    return(  
    <>
        <h1 id="delivery-in-p">{item.slice(0,1).toUpperCase() + item.slice(1) } Delivery in {selectCity}</h1>
         <div id="food-deliver-container">
         {
         loading ? <div style={{
          display:'flex',justifyContent:"center",alignItems:"center"
         }}> <CircularProgress size={100}  />  </div>
        : 
        error ? <Alert variant="filled" severity="error" sx={{
            height:'40px' , width:'auto'
        }} >{error}</Alert> : 
        <>       
           {
                foods.map((key,ind)=>{
                    return  <div id="food-hotel-items" key={ind}>  
                        <div id="add-cart-img-div">
                        <span onClick={ ()=> IncreaseFood(key)} id="plus-icon"> <AddOutlined sx={{
                            color:'#EF4F5F',
                            height:'18px',
                            width:'18px'
                         }} /> </span>
                         { isClick[key._id]!=true ? (                       
                             null
                         ) : (
                            <span id="minus-icon" onClick={ ()=> DecreaseFood(key)} > <RemoveOutlinedIcon sx={{
                                color:'#EF4F5F',
                                height:'18px',
                                width:'18px'
                             }} /> </span>
                         )
                         }
                         <img src={
                            key.Foodname==="ice_cream" ? `${key.img}/icecream${ind+1}.jpg`
                            :
                            `${key.img}/${key.Foodname}${ind+1}.jpg`} alt="img" />
                        
                         <div  onClick={ ()=> AddFood(key)} id="add-food-btn">
                             {showAdd[key._id]!=false ? (
                                <span>ADD</span>
                            ) : (
                                <span> {quantity[key._id]} </span>
                            ) }
                        
                            </div>         
                         </div>
                        <div id="food-hotel-subdiv"> 
                            <div id="food-hotel-subdivs-1">
                           
                                <p id="hotel-name" > {key.hotelName.replace(/_/g,' ')} </p>
                                <p id="hotel-types"> {key.types} </p>
                            </div>
                            <div id="food-hotel-subdivs-2">
                                <div id='hotel-ratings-div'>
                                        <p id="hotel-ratings"> {key.ratings} </p>
                                        <span>
                                        <Star  sx={{
                                            color:"white",
                                            fontSize:'12px'
                                           
                                        }}  />
                                        </span>
                                     </div>
                                <p id="hotel-cost"> {key.cost} </p>
                            </div> 
                        </div>
                    </div>
                })
            }
            </>
        }
        </div>
    </>
    )
}