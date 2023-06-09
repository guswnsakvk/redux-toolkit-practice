# redux-toolkit-practice

프로젝트 이동 링크 [redux-toolkit-practice](https://merry-trifle-1e814d.netlify.app).

![redux-toolkit](https://github.com/guswnsakvk/redux-toolkit-practice/assets/94600999/5c72f380-5004-4b6d-a81d-0cd3aaa8bfe2)


## store

store.js에 짠 코드 정리

### `products`

상품의 정보를 담고 있는 리스트

```javascript
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
      title: "Pear",
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
```

### `orders`
구매할 상품을 담는 리스트

```javascript
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
    },
    deleteOrder(state, a){
      console.log(state)
      console.log(a.payload)
      return state.filter((order) => order.id !== a.payload)
    },
    removeAll(state){
      alert("주문감사합니다")
      return state = []
    }
  }
})
```

### `addOrder 함수`
1\. order에 파라미터로 받은 id를 가진 것이 order에 있는지 확인

2\. 만약 없다면 order에 {id : 파라미터, quantity : 1} 추가

3\. 만약 있다면 order안에 id가 파라미터와 같은 거 obj의 quantity + 1 해주기
```javascript
addOrder(state, a){
  console.log(state)
  const finded = state.find((order) => order.id === payload)
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
},
```

### `deleteOrder 함수`
order 안에 입력받은 파라미터와 같은 id를 가진 obj 삭제
```javascript
deleteOrder(state, a){
  console.log(state)
  console.log(a.payload)
  return state.filter((order) => order.id !== a.payload)
},
```

## removeAll
order를 빈 배열로 초기화

```javascript
removeAll(state){
  alert("주문감사합니다")
  return state = []
}
```

## store에 있는 정보 export 설정
1\. 함수를 export 할때는 

export let { 함수이름 } = 변수이름.actions

2\. 변수를 export 할때는
export default configureStore({
  reducer: { 
    작명 : 변수이름.reducer,
  }
})

```javascript
export let {addOrder, deleteOrder, removeAll} = orders.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    products : products.reducer,
    orders : orders.reducer
  }
})
```

## Component
컴포넌트에서 store에 있는 정보 불러오기

### store 변수 가져오기
1\. useSelector를 import 해오기

2\. 변수를 가져올 때는

-> let 작명 =  useSelector((state) => {return state})
```javascript
import { useSelector } from "react-redux"

export default function Test(){
  let a = useSelector((state) => {return state})

  return(

  )
}
```

### store 함수 가져오기
1\. useDispatch, 함수 import 해오기

2\. useDispatch 함수 만들기

3\. 함수를 사용할 때 dispatch로 감싸주기
```javascript
import { useDispatch } from "react-redux"
import { 함수이름 } from "../store"

export default function Test(){
  let dispatch = useDispatch()

  return(
    <div>
      <button onClick={() => {
        dispatch(함수이름())
      }}></button>
    </div>
  )
}
```