import React,{ useState } from "react";
function ColorPicker(){

    let [color, setColor] = useState(" #34455b");

    function pickColor(event){
        setColor(event.target.value)
    }


    return(
        <div className="color">
            <div className="color-container">
                <h1 className="title">Color Picker</h1>
                <div className="box-color" style={{ backgroundColor: color}}>
                {color}</div>
                <input type="color" onChange={pickColor} value={color}/>

            </div>
        </div>
    )

}

export default ColorPicker