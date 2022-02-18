import { useEffect } from "react";

const ChildHook = ({ returnComments }) => {

  useEffect(() => {
    console.log('I DO NOT NEED TO BE CALLED')
  }, [returnComments])

  return (
    <div className="">
      <h1> { returnComments() } </h1>
    </div>
  )
}

export default ChildHook;