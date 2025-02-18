import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Shopcontext = createContext() 

const ShopState = (props) =>{

    const currency = "$"
    const deliveryfee = 10
    const navigate = useNavigate()
    
    const [search, setsearch] = useState("")
    const [showsearch, setshowsearch] = useState(true)
    const [cartitems,setcartitems] = useState({})
  
    useEffect(()=>{
        console.log(cartitems)
    },[cartitems])

    const getCartCount = () =>{
        let totalCount = 0
        for(const items in cartitems){
            for(const size in  cartitems[items]){
                try{
                    if(cartitems[items][size] >0){
                        totalCount += cartitems[items][size]
                    }
                }
                catch(error){

                }
            }
        }
        return totalCount
    }

    const addtocart = (itemId,size) =>{
        let cartData = structuredClone(cartitems)

        if(!size){
            toast.error('Select Product Size')
            return
        }

        if(cartData[itemId]){
           if(cartData[itemId][size])
            {
                cartData[itemId][size] +=1
            }
            else{
                cartData[itemId][size] = 1;
            } 
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1
        }
        setcartitems(cartData)
    }

    const updatecartquantity = (itemId,size,quantity) =>{
        let cartData = structuredClone(cartitems)
        cartData[itemId][size] = quantity
        setcartitems(cartData)
    }

    const getcartAmount = ()=>{
        let totalamount  = 0;
        for (const itemid in cartitems){
            let itemInfo = products.find((product) => product._id === itemid)
            for (const size in cartitems[itemid]){
                try{
                    if (cartitems[itemid][size] > 0){
                        totalamount += itemInfo.price * cartitems[itemid][size]
                    }
                }
                catch(error){

                }
            }
        }

        return totalamount
    }


    const value = {
        products, currency, deliveryfee,
        search,setsearch,showsearch,setshowsearch,navigate,
        cartitems, addtocart, getCartCount, updatecartquantity, getcartAmount
    }
    return(
        <Shopcontext.Provider value={value}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopState; 
