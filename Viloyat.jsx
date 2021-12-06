import React, { Component } from 'react'
import Img1 from './Img1'
import Edit from './Edit.jsx'
import Trash from './Trash'
import Img2 from './Img2'
import './index.css'


export default class Viloyat extends Component {
    i1 = <Img1/>
    edit = <Edit/>
    trash=<Trash/>
    i2 = <Img2/>
    render() {
        return (
            <div className='container'>
                <div>
                    {this.props.images==='i1' && this.i1}
                    {this.props.images==='i2' && this.i2}
                </div>
                <div className='width20'>
                    {this.props.title}
                </div>
                <div>
                    {this.props.kategoriya}
                </div>
                <div>
                    {this.props.price}
                </div>
                <div className='width20'>
                    {this.props.add}
                </div>
                <div className='update'>
                    <div>
                        <a href="#">
                            {this.props.edit === 'edit' && this.edit}
                        </a>
                        
                    </div>
                    <div>
                        <a href="#">
                            {this.props.trash==='trash' && this.trash}
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
