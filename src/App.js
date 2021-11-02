import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ThirdQ from './components/testDome/ThirdQ';
// import FirstQ from '../src/components/testDome/FirstQ';

class App extends Component{
 
  state = { 
    counters : [
    {id:0, value:5},
    {id:1, value:0},
    {id:2, value:0},
    {id:3, value:0}
  ]}
  deleteHandler = (counterId) =>{
    console.log("delete clicked", counterId);
    const counters = this.state.counters.filter(counter => counter.id !== counterId)

    this.setState({counters})
  }
 render(){ return (
    <div>
      {/* <HomeLayout /> */}
      {/* <ImageGallery/>
      <Charts/> */}
      {/* <SecondQ items = {arrItems}/> */}
      {this.state.counters.map(counter => <ThirdQ key = {counter.id} hadleDelete = {this.deleteHandler} counter={counter}>
        <h2>Hello</h2>
      </ThirdQ>)}
    </div>
  );
      }
}

export default App;
