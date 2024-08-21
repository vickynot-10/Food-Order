import { useRef } from "react";
import { FoodImgIcons,FoodShops } from "../../Data/data";
import  KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftRounded";
import  KeyboardArrowRightRounded  from "@mui/icons-material/KeyboardArrowRightRounded";
import './Deliverypage.css';
import { Outlet, useNavigate } from "react-router-dom";
export function DeliveryPage(){
    let containerRef=useRef(null);
    let brandContainerRef=useRef(null);
    const navigate=useNavigate()
    function RedirectToDeliveryHotel(val){
        let str= val.toLowerCase();
        navigate(`/delivery/${str}`)
    }
    function ScrollNext(refEl){
        refEl.current.scrollLeft += 120;
    }
    function scrollPrev(refEl){
        refEl.current.scrollLeft -= 120;
    }
    return(
        <>
        <Outlet />
        <div id="delivery-page-container">
        <div id='food-ins-text'>
            <p>Inspiration for your First order</p>
        </div> 
        <div id="delivery-container" >
            <div id="foods-order" ref={containerRef} >
                <div  id="foods-order-div">
                    {
                        Object.entries(FoodImgIcons).map(([key,val])=>{
                            return <div key={val} id="food-items">
                                <img src={val} alt="img" onClick={()=>RedirectToDeliveryHotel( key ) } />
                                <p> {key} </p>
                            </div>
                        })
                    }
                </div>
            </div>
                <button id="prev-btn" onClick={ ()=> scrollPrev(containerRef)}> { <KeyboardArrowLeftRounded /> } </button>
                <button id="next-btn"  onClick={()=> ScrollNext(containerRef)}> { <KeyboardArrowRightRounded /> } </button>
        </div>
        <div id="brand-text">
                <p> Top brands for you </p>
        </div>
        <div id="brand-container">
            <div  id="brand-items-div" ref={brandContainerRef} >
            <div  id="brands-order-div">
                {
                    Object.entries( FoodShops).map(([key,val])=>{
                        return <div key={key} id="brand-items">
                            <img src={val}  alt="img"/>
                            <p>{key} </p>
                      </div>

                    })
                }
                </div>
            </div>
            <button id="prev-order-btn" onClick={ ()=> scrollPrev(brandContainerRef)} > { <KeyboardArrowLeftRounded /> } </button>
            <button id="next-order-btn" onClick={ ()=> ScrollNext(brandContainerRef)} > { <KeyboardArrowRightRounded /> } </button>
        </div>
        
    </div>
    </>
       )
}