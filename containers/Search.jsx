import React from 'react';

const search= (props)=>(
    <div>
        <form >
            <input type="text" name="Name" onChange={(e)=>{props.change(e.target.value)}} />
            <button onClick={(e)=>{props.click(e)}}>Search</button>
        </form>
    </div>

)

export default search