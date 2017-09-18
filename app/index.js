// back tick literals
var a = "hello";
var b = "world";

let d = `hello ${b}`;
console.log(d);

//spread operator
let e = [7, 8, 9];
let f = [6, ...e, 10];
console.log(f)


let myArray = [100, 200, 3, 400];
let [first, ...second] = myArray
console.log(first, second)

//cool variable assignment from map
let wizard = {magical: true, power: 10};
let {magical, power } = wizard;
console.log(magical, power)

let ranger = { magical: false, power: 9};
({magical, power } = ranger);
console.log(magical, power)

//array functinos
const blastOff = (bruh) => {
    console.log("hello", bruh)
}
blastOff("bruh")

//map function
let points = [1, 2, 3, 4]

points = points.map(element => element + 1);
console.log(points)

let lengths = [3, 7, 5];
let multiple = 8;

lengths = lengths.map(length => length * multiple)
console.log(lengths)

//filtering
let scores = [90, 75, 55, 36]

let passingScores = scores.filter(element => element >= 70);
console.log(passingScores)

//imports
import {students, total} from './students';
console.log(students, total)

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const api_key = '74deb18854675c5c1634193838f710f5';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Lakewood',
            description: ''
        }
    }

    componentDidMount() {
        this.grabWeather(this.state.city);
    }

    grabWeather(city){
        fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
        .then(response => response.json())
        .then(json => {
            this.setState({description: json.weather[0].description})
        })
    }
    render() {
        return <div>
                    <h3>the weather in {this.state.city}</h3>
                    <h4>{this.state.description}</h4>
                </div>
    }
}
ReactDOM.render(<App/>, document.getElementById("app"))