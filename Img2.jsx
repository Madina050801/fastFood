import React, { Component } from 'react'
import './index.css'
import img2 from './img/Oval2.png'

export default class Img2 extends Component {
    img2= <img src={img2} alt="" />
    render() {
        return (
            <div>
                {this.img2}
            </div>
        )
    }
}
