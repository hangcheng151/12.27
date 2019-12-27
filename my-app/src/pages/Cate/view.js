import React, { Component } from 'react'
import './style.less'
import { Icon } from 'antd'
import axios from 'axios'
export default class view extends Component {
    state={
        data:[]
    }
    componentDidMount(){
        axios.get("js/data.json").then((res)=>{
            console.log(res.data.data)
            this.setState({
                data:res.data.data
            })
        })
        
    }

    Auto=(e)=>{
        let scroll = this.refs.scroll.scrollTop
        let main = this.refs.main
        let header = this.refs.header
        
        console.log(main.offsetTop)
      
        if(scroll>=20){
            header.style.background="#cccccc"
           
            
            
        }else{
            header.style.background=""
          
        }
        
    }
    render() {
        let {data} = this.state
        return (
            <div className="cate">
                <header ref="header">
                    <p><Icon type="left" /></p>
                    <span><input type="text"/></span>
                    <p><Icon type="user" /></p>
                </header>
                <section onScroll={(e)=>this.Auto(e)} ref="scroll">
                    <div className="Img">
                        <img src="1.png" alt=""/>
                    </div>
                    <div className="nav_List">
                        <dl>
                            <dt><img src="listimg/images/1.jpg" alt=""/></dt>
                            <dd>火锅</dd>
                        </dl>
                        <dl>
                            <dt><img src="listimg/images/2.jpg" alt=""/></dt>
                            <dd>甜点饮品</dd>
                        </dl>
                        <dl>
                            <dt><img src="listimg/images/3.jpg" alt=""/></dt>
                            <dd>自助餐</dd>
                        </dl>
                        <dl>
                            <dt><img src="listimg/images/4.jpg" alt=""/></dt>
                            <dd>小吃快餐</dd>
                        </dl>
                        <dl>
                            <dt><img src="listimg/images/5.jpg" alt=""/></dt>
                            <dd>西餐</dd>
                        </dl>
                        <dl>
                            <dt><img src="listimg/images/6.jpg" alt=""/></dt>
                            <dd>烧烤烤肉</dd>
                        </dl>
                        <dl>
                            <dt><img src="listimg/images/7.jpg" alt=""/></dt>
                            <dd>香锅烤鱼</dd>
                        </dl>
                        <dl>
                            <dt><img src="listimg/images/8.jpg" alt=""/></dt>
                            <dd>海鲜</dd>
                        </dl>

                    </div>
                    <div className="main" ref="main">
                        <nav>
                            <ul>
                                <li>全部美食 <Icon type="caret-down" /> </li>
                                <li>附近商家 <Icon type="caret-down" /></li>
                                <li>人气最高 <Icon type="caret-down" /></li>
                                <li>筛选 <Icon type="caret-down" /></li>
                            </ul>
                        </nav>
                        <div className="Info">
                            {
                                data.map((v,i)=>{
                                    return <div key={i} className="box">
                                        <dl>
                                            <dt><img src={v.img} alt=""/></dt>
                                            <dd>
                                                <h1>{v.name}</h1>
                                                <h2>★★★★★￥{v.price}/人 <span>{v.place}{v.distance}m</span></h2>
                                                <h3>{v.msg}</h3>
                                                <h4>{v.msg1}</h4>
                                            </dd>
                                        </dl>
                                    </div>
                                })
                            }
                        
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
