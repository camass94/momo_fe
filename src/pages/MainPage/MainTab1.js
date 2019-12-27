import React, { useState,  } from 'react'
import { Button, TextField, InputBase,  } from '@material-ui/core'

import { Slider } from 'components/Slider/Slider.js'
import { LinkLists } from 'components/LinkLists/LinkLists.js'

import bannerThumb1 from 'images/main/banner/thumb1.png'
import thumbImg1 from 'images/thumb/img1.png'
import thumbImg2 from 'images/thumb/img2.png'
import thumbImg3 from 'images/thumb/img3.png'
import thumbImg4 from 'images/thumb/img4.png'
import thumbImg5 from 'images/thumb/img5.png'

export const MainTab1 = props => {
    const {items} = props;
    console.log(props)
    const _classes = {
        parent : (props.className)?props.className:"",
    }

    const [bannerItems] = useState([
        {html: '<p class="title">회사가 망해요<br>클로져 모임</p><p class="text">회사를 들어가면 망하는 사람들의 모임입니다.</p>', 
        src:'#banner01', 
        thumb: bannerThumb1},
        {html: '<p class="title">2 회사가 망해요<br>클로져 모임</p><p class="text">회사를 들어가면 망하는 사람들의 모임입니다.</p>', 
        src:'#banner02', 
        thumb: bannerThumb1},
        {html: '<p class="title">3 회사가 망해요<br>클로져 모임</p><p class="text">회사를 들어가면 망하는 사람들의 모임입니다.</p>', 
        src:'#banner02', 
        thumb: bannerThumb1},
    ]);
    const [themeItems] = useState([
        {text: '[카톡모임]하루에 하나씩 그림을 그려요', 
        src:'/', 
        thumb: thumbImg1,
        html: '<p class="text--small">1일 전 활동 <em>34명</em></p>'},
        {text: '직무/네트워크', src:'/', thumb: thumbImg2},
        {text: '스터디', src:'/', thumb: thumbImg3},
        {text: '언어', src:'/', thumb: thumbImg4},
        {text: '음식', src:'/', thumb: thumbImg5},
    ]);


    return (
        <div className={_classes.parent+"__container container"}>
            <Slider className={"banner"} items={bannerItems}/>
            <div className={"theme theme--card"}>
                <div class="theme__header header">
                    <div className="theme__header__label header__label label">이달의 테마</div>
                    <div className="theme__header__headline header__headline headline">
                        크리스마스 카드를 그려봐요!
                    </div>
                </div>
                <LinkLists className="theme" items={themeItems}/>
            </div>
            <div className={"popular popular--card"}>
                <div class="popular__header header">
                    <div className="popular__header__label header__label label">인기모임</div>
                    <div className="popular__header__headline header__headline headline">
                        12월 문화/예술 인기모임
                    </div>
                </div>
                <LinkLists className="popular" items={themeItems}/>
            </div>
        </div>
    );
}