import React, { Component } from 'react'
import './style.less'
import { Icon, Carousel } from 'antd'
import Swiper from 'swiper'
import { NavLink } from 'react-router-dom'
export default class view extends Component {

    componentDidMount(){
        new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
    }
    render() {
        return (
            <div className="home">
                <header>
                    <div className="header-Left"> 北京 <Icon type="down" /> </div>
                    <div className="header-Center"><input type="text" placeholder="请输入商家名、品类、或者商圈" /></div>
                    <div className="header-Right"> <Icon type="user" /> </div>
                </header>
                <section>
                <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                  <div className="nav_List">
                  <dl>
                      <dt> <NavLink to="/cate"> <img src="listimg/1.jpg" alt="" /></NavLink></dt>
                      <dd>美食</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_03.jpg" alt="" /></dt>
                      <dd>猫眼</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_05.jpg" alt="" /></dt>
                      <dd>酒店</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_07.jpg" alt="" /></dt>
                      <dd>体闲娱乐</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_09.jpg" alt="" /></dt>
                      <dd>外卖</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_16.jpg" alt="" /></dt>
                      <dd>KTV</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_18.jpg" alt="" /></dt>
                      <dd>周边游</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_19.jpg" alt="" /></dt>
                      <dd>丽人</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_20.jpg" alt="" /></dt>
                      <dd>小吃快餐</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_21.jpg" alt="" /></dt>
                      <dd>生活服务</dd>
                  </dl>
              </div>
                  </div>
                  <div className="swiper-slide">
                  <div className="nav_List">
                  <dl>
                      <dt><img src="listimg/1.jpg" alt="" /></dt>
                      <dd>美食</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_03.jpg" alt="" /></dt>
                      <dd>猫眼</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_05.jpg" alt="" /></dt>
                      <dd>酒店</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_07.jpg" alt="" /></dt>
                      <dd>体闲娱乐</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_09.jpg" alt="" /></dt>
                      <dd>外卖</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_16.jpg" alt="" /></dt>
                      <dd>KTV</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_18.jpg" alt="" /></dt>
                      <dd>周边游</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_19.jpg" alt="" /></dt>
                      <dd>丽人</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_20.jpg" alt="" /></dt>
                      <dd>小吃快餐</dd>
                  </dl>
                  <dl>
                      <dt><img src="listimg/2_21.jpg" alt="" /></dt>
                      <dd>生活服务</dd>
                  </dl>
              </div>
                  </div>
                 
                </div>
            
                <div className="swiper-pagination"></div>
              </div>
                   
                    <div className="List">
                        <h1> <span> 猜你喜欢</span></h1>
                        <div className="box">
                            <dl>
                                <dt><img src="listimg/images/3_03.jpg" alt="" /></dt>
                                <dd>
                                    <h2>华莱士炸鸡汉堡</h2>
                                    <h3>[20店通用]鸡腿汉堡+薯条+中杯可乐1份</h3>
                                    <h4> <span className="color"> 13元</span> 门市价:31元 <span className="float-right"> 已售18019</span></h4>
                                </dd>
                            </dl>
                        </div>

                        <div className="box">
                            <dl>
                                <dt><img src="listimg/images/3_06.jpg" alt="" /></dt>
                                <dd>
                                    <h2>好伦哥</h2>
                                    <h3>[五棵松]永定路店单人自助餐1人次</h3>
                                    <h4> <span className="color"> 13元</span> 门市价:31元 <span className="float-right"> 已售18019</span></h4>
                                </dd>
                            </dl>
                        </div>
                        <div className="box">
                            <dl>
                                <dt><img src="listimg/images/3_08.jpg" alt="" /></dt>
                                <dd>
                                    <h2>好利来</h2>
                                    <h3>[北京等]【人气】蛋挞一份</h3>
                                    <h4> <span className="color"> 13元</span> 门市价:31元 <span className="float-right"> 已售18019</span></h4>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
