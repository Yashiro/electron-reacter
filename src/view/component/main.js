import React from 'react'
import {render} from 'react-dom'
import {message,Button} from 'antd'
import styled from 'styled-components'
import img1 from '../res/image/1.jpg'
const Img=styled.img`
    width:100px;
    height:100px;
    border-radius:50%;
`;
export default class Mian extends React.Component{
    imgClick(){
        message.info('我还是很喜欢你,像风追了八万里，不问归期…')
        message.warn('我好想你')
    }
    render(){
        return(
            <div>
                <Img src={img1} onClick={this.imgClick}/>
                好久不见
                <Button onClick={()=>message.info('我好想你')}>夏虫</Button>
            </div>
        );
    }
}