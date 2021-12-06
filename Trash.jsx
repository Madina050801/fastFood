import React, { Component } from 'react'
import './index.css';
import trash from './img/trash.png'

export default class Trash extends Component {
    img = <img src={trash} alt="" />
    render() {
        return (
            <div className='edit'>
                {this.img}
            </div>
        )
    }
}
