import React, { Component } from 'react'
import './index.css';
import edit from './img/Edit.png' 


export default class Edit extends Component {
    img = <img src={edit} alt="" />
    render() {
        return (
            <div className='edit'>
                {this.img}
            </div>
        )
    }
}
