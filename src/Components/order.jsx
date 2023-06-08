import { useSelector, useDispatch } from "react-redux"
import { deleteOrder } from "../store"

export default function Order(){
  let a = useSelector((state) => {return state})
  let dispatch = useDispatch()

  if (a.orders.length === 0){
    return (
    <aside>
      <div className="empty">
        <div className="empty-title">You don't have any orders</div>
        <div className="empty-subtitle">Click on a + to add an order</div>
      </div>
    </aside>)
  }

  return(
    <div className="order">
      <div className="order-container">
        {
          a.orders.map((order) => {
            const item = order
            const orderItem = a.products.find((p) => p.id === item.id)
            return(
              <div className="order-item" key={item}>
                <img
                  className="order-item-img"
                  src={`image/fruit${order.id}.jpg`}
                  alt={item.title}
                ></img>
                <p className="order-item-title">{orderItem.title} <br></br> X {order.quantity}</p>
                <p className="order-item-price">$ {orderItem.price}</p>
                <div className="order-item-delete" onClick={() => {
                  dispatch(deleteOrder(item.id))
                }}>X</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}