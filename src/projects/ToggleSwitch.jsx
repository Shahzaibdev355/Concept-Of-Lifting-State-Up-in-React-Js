import { useState } from "react";

const ToggleSwitch = () => {

    const [btnOn, setBtnOn] = useState(false)

    const handleClick= (e)=>{
        setBtnOn(!btnOn)
    }

    return ( 
        <button onClick={handleClick}>{btnOn ? 'On' : "false"}</button>
     );
}
 
export default ToggleSwitch;