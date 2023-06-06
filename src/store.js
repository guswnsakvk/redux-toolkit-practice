import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : 'park'
})

let products = createSlice({
  name : 'products',
  initialState : [
    {
      id: "1",
      title: "Tangerine",
      price: 10,
    },
    {
      id: "2",
      title: "Grape",
      price: 20,
    },
    {
      id: "3",
      title: "Apple",
      price: 30,
    },
    {
      id: "4",
      title: "pear",
      price: 40,
    },
    {
      id: "5",
      title: "Peach",
      price: 50,
    },
    {
      id: "6",
      title: "Watermelon",
      price: 60,
    },
  ]
})

let orders = createSlice({
  name : 'orders',
  initialState : [],
  reducers : {
    addOrder(state, a){
      console.log(state)
      const finded = state.find((order) => order.id === a.payload)
      console.log(finded)

      if (finded === undefined){
        console.log([...state, {id : a.payload, quantity: 1}])
        return [...state, {id : a.payload, quantity: 1}]
      } else{
        return state.map((order) => {
          if (order.id === a.payload){
            return{
              id : order.id,
              quantity: order.quantity + 1
            }
          } else{
            return order
          }
        })
      }
    }
  }
})

export let {addOrder} = orders.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    products : products.reducer,
    orders : orders.reducer
  }
})