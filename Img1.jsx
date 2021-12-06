import React, { Component } from 'react'
import './index.css';
import img1 from './img/Oval.png'

export default class Img1 extends Component {
   img1 = <img src={img1} alt="" />
    render() {
        return (
            <div>
                {this.img1}
            </div>
        )
    }
}
