import React, { useState,  } from 'react'
import { Button, SwipeableDrawer } from '@material-ui/core'

import { Header } from './Header'
import { Category } from './Category'
import { MainTab1 } from './MainTab1'
import { MainTab2 } from './MainTab2'
import { MainTab3 } from './MainTab3'
import { SideMenu } from 'components/SideMenu/SideMenu'
import { TabPage } from 'components/TabPage/TabPage'

import './MainPage.scss'

import btnArrUp from 'images/icons/btn_arrow_up.svg'
import icoCulture from 'images/category/c_culture.svg'
import icoFood from 'images/category/c_food.svg'
import icoBook from 'images/category/c_book.svg'
import icoLang from 'images/category/c_language.svg'
import icoStudy from 'images/category/c_study.svg'

export const MainPage = props => {
    const [sideState, setSideState] = useState({
        left: false,
    })

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }
        setSideState({ ...sideState, [side]: open })
    }
    const headerObj = {
        toggleDrawer: toggleDrawer,
        mainHeadline: '한 주를 시작하는 월요일!<br>무료함을 달래봐요',
        searchItems: useState([
            {text: '치맥파티', src: '/', view: '1000'},
            {text: '영화감상', src: '/', view: '2000'},
            {text: '코인노래방', src: '/', view: '3000'},
        ]),
    }
    
    const [cateItems] = useState([
        {text: '문화/예술', src:'/', ico: icoCulture},
        {text: '직무/네트워크', src:'/', ico: icoBook},
        {text: '스터디', src:'/', ico: icoStudy},
        {text: '언어', src:'/', ico: icoLang},
        {text: '음식', src:'/', ico: icoFood},
    ]);
    const [tabItems] = useState([
        {text: '추천 모임', link: MainTab1},
        {text: '신규 생성', link: MainTab2},
        {text: '클래스', link: MainTab3},
    ]);

    return (
        <div className="main">
            <Header className="main" items={headerObj}></Header>
            <SwipeableDrawer
                anchor="left"
                open={sideState.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                <SideMenu></SideMenu>
            </SwipeableDrawer>
            <div className="main__page page">
                <p className="main__page__guide guide--align-center">원하는 모임 카테고리를 선택해 주세요.</p>
                <button type="button" className="main__page__btn--up btn">
                    <img className="icon" src={btnArrUp} alt="icon" />
                </button>
                <Category className="main__page" items={cateItems}></Category>
                <div className="main__page__container">
                    <TabPage className="main__page" items={tabItems}></TabPage>
                </div>
            </div>
        </div>
    )
}