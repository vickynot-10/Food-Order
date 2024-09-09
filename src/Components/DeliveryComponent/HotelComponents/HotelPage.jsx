import { useParams } from "react-router-dom";
import { FoodShops, FoodShopsDetails } from "../../../Data/data";
import { useCity } from "../../../Contexts/citySelect";
import { motion } from "framer-motion";
import axios from "axios";
import "./hotelPage.css";
import Directions from "@mui/icons-material/DirectionsOutlined";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import Share from "@mui/icons-material/ShareOutlined";
import { OverviewSection } from "./overviewHotels/overview";
import { useState,useEffect } from "react";
import { OrderOnline } from "./orderonlineFoods/orderOnline";
export function HotelPage() {
  const [isActiveOverview, setActiveOverview] = useState("overview");
  const { hotelPage } = useParams();
  const { selectCity } = useCity();
  const HotelImgs = FoodShops[hotelPage];
  const [hoteldetails,setHotelDetails]= useState({})
  useEffect(()=>{
    document.title=`${hotelPage},${selectCity}`;
  },[])
let hotelNameLowercase = hotelPage.toLocaleLowerCase()
  useEffect(()=>{
    async function fetchData(){
      try{
        let res = await axios.get(`http://localhost:4040/delivery/hotel/${hotelNameLowercase}`);
        setHotelDetails(res.data)
      }
      catch(e){
        console.log(e)
      }
    }
    fetchData()
  })


  return (
    <div id="hotelpage-container">
      <div id="hotel-contents">
        <div id="hotel-imgs">
          <div id="main-hotel-img">
            <motion.img src={HotelImgs} alt="hotel-img"
            //  initial={{
            //   opacity:1
            // }}
            // whileHover={{
            //   opacity:0.8
            // }}
            // 
             />
          </div>
          <div id="secondary-hotel-img">
            <motion.img 
            // initial={ {opacity:1}  }
            // whileHover={{
            //   opacity:0.8
            // }}
             src={HotelImgs} alt="hotel-img" />
            <motion.img 
            // initial={ {opacity:1}  }
            // whileHover={{
            //   opacity:0.8, scale:1
            // }} 
            src={HotelImgs} alt="hotel-img" />
          </div>
          <div id="third-hotel-img">
            <motion.img 
            // initial={ {opacity:1}  }
            // whileHover={{
            //   opacity:0.8
            // }}
             src={HotelImgs} alt="hotel-img" />
          </div>
        </div>
      </div>
      <div id="hotel-details">
        <div id="div-for-sticky">
          <div id="hotel-details-header1">
            <h1 id="hotel-name-header" > {hotelPage} </h1>
            <p id="hotel-subtexts-header"> {hoteldetails.hotelFoodTypes} </p>
            <p id="hotel-subtexts-header2"> {selectCity} </p>
            
          </div>
         <div id="direction-share-button">
          <motion.div 
          whileHover={{
            cursor:'pointer',
            backgroundColor:'rgb(227, 219, 219)'
          }}
          transition={{
            ease:"easeInOut"
          }}
          
          >
            <span>    
              <Directions
                sx={{
                  color: "red",
                  height: "16px",
                  width: "16px"
                }}
              />
              Direction
            </span>
          </motion.div>
          <motion.div 
          whileHover={{
            cursor:'pointer',
            backgroundColor:'rgb(227, 219, 219)'
          }}
          transition={{
            ease:"easeInOut"
          }}      
          
          >
            
            <span>
              
              <BookmarkAdd
                sx={{
                  color: "red",
                  height: "16px",
                  width: "16px",
                  
                }}
              />
              Bookmark
            </span>
          </motion.div>

          <motion.div
          whileHover={{
            cursor:'pointer',
            backgroundColor:'rgb(227, 219, 219)'
          }}
          transition={{
            ease:"easeInOut"
          }}
          
          >
            
            <span>
              
              <Share
                sx={{
                  color: "red",
                  height: "16px",
                  width: "16px",
                  
                }}
              />
              Share
            </span>
          </motion.div>
         </div>
        <div id="about-hotel-div">
          <div id="about-header-div">
            <p
              onClick={() => setActiveOverview("overview")}
              className={isActiveOverview === "overview" ? "active-about" : " "}
            >
              Overview
            </p>
            <p
              onClick={() => setActiveOverview("order")}
              className={isActiveOverview === "order" ? "active-about" : " "}
            >
              Order Online
            </p>
            <p
              onClick={() => setActiveOverview("review")}
              className={isActiveOverview === "review" ? "active-about" : " "}
            >
              Reviews
            </p>
            <p
              onClick={() => setActiveOverview("photos")}
              className={isActiveOverview === "photos" ? "active-about" : " "}
            >
              Photos
            </p>
            <p
              onClick={() => setActiveOverview("menu")}
              className={isActiveOverview === "menu" ? "active-about" : " "}
            >
              Menu
            </p>
          </div>
          </div>
        
          <div id="hrLine"></div>
          </div>
          {isActiveOverview === "overview" ? (
           <OverviewSection hotelName={ hotelNameLowercase } />
          ) : (
            <OrderOnline hotelName={hotelPage} />
          )}
        </div>
      </div>
    
  );
}
