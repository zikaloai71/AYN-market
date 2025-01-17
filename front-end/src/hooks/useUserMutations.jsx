import { useMutation } from "@apollo/client";
// import {useNavigate} from 'react-router-dom'
import UserMutations from "../api/userMutations.api";
// import { useAuthContext } from "./useAuthContext";

export const useUserMutations = () => {
  
    const [addToCart] = useMutation(UserMutations.addToCart(),{
        refetchQueries:['CartDetails'],
    });
  
    const [reduceQuantityOfCartItem] = useMutation(UserMutations.reduceQuantityOfCartItem(),{
        refetchQueries: ['CartDetails'],
    });

    const [removeFromCartItem] = useMutation(UserMutations.removeFromCartItem(),{
        refetchQueries: ['CartDetails'],
    });
    
    const [createOrder] = useMutation(UserMutations.createOrder(),{
        refetchQueries: ['CustomerDetails'],
    });
    
   const [payOrder] = useMutation(UserMutations.payOrder());

   const [addToWishList] = useMutation(UserMutations.addToWishList(),{
    refetchQueries: ['CustomerDetails'],
    });

   const [removeFromWishList] = useMutation(UserMutations.removeFromWishList(),{
    refetchQueries: ['CustomerDetails']
   })

   const [updateProfile] = useMutation(UserMutations.updateProfile())

    const addToCartApi = async (input)=>{
         const res = await addToCart({ variables: { input } });
         return res;
    }

    const reduceQuantityOfCartItemApi = async (input)=>{
        const res = await reduceQuantityOfCartItem({ variables: { input } });
        return res;
    }
    
    const removeFromCartItemApi = async (input)=>{
        const res = await removeFromCartItem({ variables: { input } });
        return res;
    }

    const createOrderApi = async (input)=>{
        const res = await createOrder({ variables: { input } });
        return res;
    }
    
    const payOrderApi = async (orderId)=>{
        const res = await payOrder({ variables: { orderId } });
        return res;
    }

    const addToWishListApi = async (input)=>{
        const res = await addToWishList({ variables: { input } });
        return res;
    }

    const removeFromWishListApi = async (input)=>{
        const res = await removeFromWishList({variables:{input}})
        return res
    }

   const updateProfileApi = async (input)=>{
     
         const res = await updateProfile({variables:{input}})
         return res
    }

    return{
        addToCartApi,
        reduceQuantityOfCartItemApi,
        removeFromCartItemApi,
        createOrderApi,
        payOrderApi,
        addToWishListApi,
        removeFromWishListApi,
        updateProfileApi
    }
}