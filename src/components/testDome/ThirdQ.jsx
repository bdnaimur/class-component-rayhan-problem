import React, { Component } from 'react';

class ThirdQ extends Component{
 state = {
     value : this.props.counter.value
 }
 handleClick = (e, id) =>{
    this.setState({value: this.state.value + 1})
 }
 render(){
     console.log(this.props);
    return (
        <div>
            <h5>{this.props.children}</h5>
           <span> hello: {this.state.value}</span>
            <button onClick={(e)=>this.handleClick(e, {id:10})}>Increament</button>
            <button onClick={()=>this.props.hadleDelete(this.props.counter.id)}>Delete</button>
        </div>
        //  value={counter.value} id={counter.id}
    );
};
}


export default ThirdQ;