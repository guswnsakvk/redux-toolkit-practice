import { useSelector } from "react-redux"

export default function Order(){
  let a = useSelector((state) => {return state})

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
        
      </div>
    </div>
  )
}