import { useContext } from "react";
import { AppContext } from "./Hooks";


const ChildHook2 = () => {
  const { setUsername } = useContext(AppContext)

  return (
    <div className="">
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
    </div>
  )
}

export default ChildHook2;