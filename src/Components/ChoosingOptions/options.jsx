import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import  RestaurantTwoTone  from '@mui/icons-material/RestaurantOutlined';
import  DeliveryDiningOutlined  from '@mui/icons-material/DeliveryDiningOutlined';
import LiquorOutlined from '@mui/icons-material/LiquorOutlined';
import { motion } from 'framer-motion';
import './option.css'
import { OptionsContext } from '../../Contexts/context';
export function ChooseOptions(){
    const {isActive,setActive} = useContext(OptionsContext)
    return(
        <div id="choose-options-div">
            <div id='opt-btn-div'>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity: isActive==='diningout' ? 1 : 0}}
                transition={{
                    ease:"linear"
                }}
                id='icon-div' style={ {display : isActive==='diningout' ? 'flex' : 'none' } } >
                    <RestaurantTwoTone style={{color:'black' , fontSize:'30px' }} />
                </motion.div>
                <p  id='options-btn' onClick={ ()=> setActive('diningout') }>
                    <Link to="/diningout" className={ isActive === 'diningout' ? 'active' : " "  }>Dining Out</Link>
                </p>
            </div>
            <div id='opt-btn-div'>
                <motion.div id='icon-div'                 
                initial={{opacity:0}}
                animate={{opacity: isActive==='delivery' ? 1 : 0}}
                transition={{
                    ease:"linear"
                }}

                style={ {display : isActive==='delivery' ? 'flex' : 'none' } } >
                    <DeliveryDiningOutlined style={{color:'black' , fontSize:'30px' }} />
                </motion.div>    
                <p id='options-btn' onClick={ ()=> setActive('delivery') }>
                    <Link to="/delivery"  className={ isActive==='delivery' ? 'active' : " "  }>Delivery</Link>
                </p>
            </div>
            <div id='opt-btn-div'>
                <motion.div id='icon-div'
                initial={{opacity:0}}
                animate={{opacity: isActive==='nightlife' ? 1 : 0  }}
                transition={{
                    duration:0.5,
                    ease:"linear"
                }}
                style={ {display : isActive==='nightlife' ? 'flex' : 'none' } } >
                    <LiquorOutlined style={{color:'black' , fontSize:'30px' }} />
                </motion.div>
                <p id='options-btn' onClick={ ()=> setActive('nightlife') }>
                    <Link to="/nightlife"  className={ isActive==='nightlife' ? 'active' : " "  }>Night Life</Link>
                </p>
            </div>
        </div>
    )
}