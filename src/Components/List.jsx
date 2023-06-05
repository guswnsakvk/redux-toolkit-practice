import { useSelector } from "react-redux"
import "../index.css"

export default function List(){
  let a = useSelector((state) => {return state})
  console.log(a)

  return(
    <div className="list-item-container">
      <div className="list-item">
        <img 
          className="list-img"
          src="image/fruit1.jpg"
          alt="Tangerine"
        ></img>
        <div className="list-item-body">
          <div>
            <p className="list-item-title">Tangerine</p>
            <p className="list-item-price">$ 10</p>
          </div>
          <div className="list-btn-container">
            <div className="list-btn">+</div>
          </div>
        </div>
      </div>
      <div className="list-item">
        <img 
          className="list-img"
          src="image/fruit1.jpg"
          alt="Tangerine"
        ></img>
        <div className="list-item-body">
          <div>
            <p className="list-item-title">Tangerine</p>
            <p className="list-item-price">$ 10</p>
          </div>
          <div className="list-btn-container">
            <div className="list-btn">+</div>
          </div>
        </div>
      </div>
      <div className="list-item">
        <img 
          className="list-img"
          src="image/fruit1.jpg"
          alt="Tangerine"
        ></img>
        <div className="list-item-body">
          <div>
            <p className="list-item-title">Tangerine</p>
            <p className="list-item-price">$ 10</p>
          </div>
          <div className="list-btn-container">
            <div className="list-btn">+</div>
          </div>
        </div>
      </div>
      <div className="list-item">
        <img 
          className="list-img"
          src="image/fruit1.jpg"
          alt="Tangerine"
        ></img>
        <div className="list-item-body">
          <div>
            <p className="list-item-title">Tangerine</p>
            <p className="list-item-price">$ 10</p>
          </div>
          <div className="list-btn-container">
            <div className="list-btn">+</div>
          </div>
        </div>
      </div>
      <div className="list-item">
        <img 
          className="list-img"
          src="image/fruit1.jpg"
          alt="Tangerine"
        ></img>
        <div className="list-item-body">
          <div>
            <p className="list-item-title">Tangerine</p>
            <p className="list-item-price">$ 10</p>
          </div>
          <div className="list-btn-container">
            <div className="list-btn">+</div>
          </div>
        </div>
      </div>
      <div className="list-item">
        <img 
          className="list-img"
          src="image/fruit1.jpg"
          alt="Tangerine"
        ></img>
        <div className="list-item-body">
          <div>
            <p className="list-item-title">Tangerine</p>
            <p className="list-item-price">$ 10</p>
          </div>
          <div className="list-btn-container">
            <div className="list-btn">+</div>
          </div>
        </div>
      </div>
    </div>
  )
}