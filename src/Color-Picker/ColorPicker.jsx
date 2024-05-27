import React, {useState} from 'react';

function ColorPicker(){
    const [color,setColor] = useState("#FFFFFF");
    function handleColorChange(event){
        setColor(event.target.value);
    }
    return(
        <div className='color-picker-container'>
            <h1 className='color-picker-title' style={{color : color}}>Color Picker</h1>
            <div className='color-display' style={{background : color}}>
                <p className='selected-color'>Selected Color : {color}</p>
            </div>
            <label className='select-color-label'>Select a Color:</label>
            <input className='color-picker-input' type='color' value={color} onChange={handleColorChange} />
        </div>
    );
}

export default ColorPicker;