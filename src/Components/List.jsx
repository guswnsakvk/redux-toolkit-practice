import { useSelector } from "react-redux"

export default function List(){
  let a = useSelector((state) => {return state})
  console.log(a)

  return(
    <div></div>
  )
}