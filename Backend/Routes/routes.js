import { FoodshopDeatilsModel } from '../Models/FoodShopDetails.js';
import express, { json } from 'express';
import { FoodDetailsModel } from '../Models/FoodsDetails.js';
const app = express()
const routes = express.Router();
app.use(json())

function formatText(str) {
    if (str.toLowerCase() == "mcdonald's") {
        return "mcdonald's"
    }
    let uppercaseCount = 0;
    return str.replace(/([A-Z])/g, (match) => {
        uppercaseCount++;
        if (uppercaseCount === 2) {
            return `_${match}`;
        }
        return match;
    })
}

routes.get('/:companyname/foods', async(req, res) => {
    const companyName = formatText(req.params.companyname)
    try {
        const CompanyFoodDetails = await FoodDetailsModel.find({
            hotelName: {
                $regex: companyName,
                $options: 'i'
            }
        })
        if (res) {
            res.json(CompanyFoodDetails);
        } else {
            res.send("Not found");
        }
    } catch (e) {
        res.send(e)
    }
})

routes.get('/delivery/food/:foodName', async(req, res) => {
    const foodName = req.params.foodName.toLocaleLowerCase();
    try {
        const FoodNameDb = await FoodDetailsModel.find({
            Foodname: foodName
        })
        if (FoodNameDb) {
            res.json(FoodNameDb);
            console.log("food found")
        } else {
            console.log("Food not found")
        }
    } catch (e) {
        console.log(e)
    }
})

routes.get('/delivery/hotel/:hotelname', async(req, res) => {
    const hotelname = req.params.hotelname;
    try {
        const hotelNameFind = await FoodshopDeatilsModel.findOne({
            hotelName: hotelname
        })
        if (hotelNameFind) {
            res.json(hotelNameFind)
        } else {
            console.log("user not find");
        }
    } catch (e) {
        console.log(e)
    }

})

export default routes