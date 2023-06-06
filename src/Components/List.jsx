import { useSelector, useDispatch } from "react-redux"
import { addOrder } from "../store"
import "../index.css"

export default function List(){
  let a = useSelector((state) => {return state})
  console.log(a)
  let dispatch = useDispatch()

  return(
    <div className="list-item-container">
      {
        a.products.map((product) => {
          const {id, title, price} = product

          return(
            <div className="list-item" key={id}>
              <img 
                className="list-img"
                src={`image/fruit${id}.jpg`}
                alt="Tangerine"
              ></img>
              <div className="list-item-body">
                <div>
                  <p className="list-item-title">{title}</p>
                  <p className="list-item-price">$ {price}</p>
                </div>
                <div className="list-btn-container">
                  <div className="list-btn" onClick={() => {
                    dispatch(addOrder(id))
                  }}>+</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}