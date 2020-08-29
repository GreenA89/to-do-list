import React from 'react';
import '../input/input.css'

const Input = (props) => {
    return (
      <div className='input-div'>
        <input 
          type='text' 
          className='text-input' 
          placeholder='What do you need to do today?'
          onChange={props.handleChange}
          value={props.handleValue}
        />
        <button 
          className='submit'
          onClick={props.handleSubmit}
        >+</button>
      </div>
    )
  }

  export default Input;