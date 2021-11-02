import React, { useState } from 'react';

const TestCount = () => {
    const [initialState, setInitialState] = useState(0)
    const handleClick = e => {

    }
    const handleReset = e => {

    }
    const handleChange = e =>{
        console.log(e.target.parentNode.parentNode);
    }
    return (
        <>
            <span><button onClick={handleClick} className="btn btn-danger">Reset</button></span>
            {/* <div className="d-block"> */}
                <form onReset={handleReset} action="">
                    <div className="clid">
                        <input type="reset" value="Reset Button" className="btn btn-info"/> <br />
                        <label for="cars">Choose a car:</label>
                        <select onChange={handleChange} type="reset" id="cars">
                            <option value={initialState}>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <select>
                            <option value="0">blue</option>
                            <option value="1-newcount">red</option>
                            <option value="2-newcount">green</option>
                            <option value="3-newcount">brown</option>
                            <option value="4-newcount">pink</option>
                            <option value="5-newcount">yellow</option>
                            <option value="6-newcount">chokolate</option>
                        </select>
                    </div>
                    <div className="child">
                        <label for="cars">Choose a car:</label>
                        <select id="cars">
                            <option value={initialState}>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <select>
                            <option value="0">blue</option>
                            <option value="1-newcount">red</option>
                            <option value="2-newcount">green</option>
                            <option value="3-newcount">brown</option>
                            <option value="4-newcount">pink</option>
                            <option value="5-newcount">yellow</option>
                            <option value="6-newcount">chokolate</option>
                        </select>
                    </div>
                    <div className="child">
                        <label for="cars">Choose a car:</label>
                        <select id="cars">
                            <option value={initialState}>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <select>
                            <option value="0">blue</option>
                            <option value="1-newcount">red</option>
                            <option value="2-newcount">green</option>
                            <option value="3-newcount">brown</option>
                            <option value="4-newcount">pink</option>
                            <option value="5-newcount">yellow</option>
                            <option value="6-newcount">chokolate</option>
                        </select>
                    </div>
                </form>
            {/* </div> */}
        </>
    );
};

export default TestCount;