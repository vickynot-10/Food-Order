import { foodDeliver } from "../../../Data/data";
import './FoodItemDeliver.css';
import { useParams } from "react-router-dom";
import  Star  from "@mui/icons-material/Star";

export function FoodDeliversItems(){
    const { item }=useParams();
    let itemData=foodDeliver[item]
    return(  
    <>
        <h1>{item.slice(0,1).toUpperCase() + item.slice(1) } Delivery in Bengaluru</h1>
        <div id="food-deliver-container">
            {
                Object.entries(itemData).map(([key,val])=>{
                    return  <div id="food-hotel-items" key={key}>
                         <img src={val.img} alt="img" />                       
                        <div id="food-hotel-subdiv"> 
                            <div id="food-hotel-subdivs-1">
                                <p id="hotel-name" > {val.hotel_name} </p>
                                <p id="hotel-types"> {val.types} </p>
                            </div>
                            <div id="food-hotel-subdivs-2">
                                <div id='hotel-ratings-div'>
                                        <p id="hotel-ratings"> {val.ratings} </p>
                                        <span>
                                        <Star  sx={{
                                            color:"white",
                                            fontSize:'12px'
                                           
                                        }}  />
                                        </span>
                                     </div>
                                <p id="hotel-cost"> {val.cost} </p>
                            </div> 
                        </div>
                    </div>
                })
            }
        </div>
    </>
    )
}