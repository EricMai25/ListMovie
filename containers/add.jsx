import React from 'react';

class add extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            add : null
        }
    }

    render(){

        return(
            
            <div>
                <form>
                    <input type="text" name="Name" onChange={(e)=>{this.state.add = e.target.value}}></input>
                    <button onClick={(event)=>{
                        this.props.addTo(this.state.add)
                        event.preventDefault()                        
                        }}>Add Movie</button>
                </form>
            </div>
        
    
        )


    }



} 




export default add