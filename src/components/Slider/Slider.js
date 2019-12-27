import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import { Link } from "react-router-dom";

import './Slider.scss'

export const Slider = props =>{
    const { items } = props;
    const _classes = {
        parent : (props.className)?props.className+"__sliders":"",
    }

    return (
        <SwipeableViews className={_classes.parent+" sliders"}>
        {
            items.map((item,index)=>
                <div className={_classes.parent+"__item sliders__item"} key={"_classes.parent_"+index}>
                    <Link to={item.src} className={_classes.parent+"__link sliders__link"}>
                        {item.ico &&
                            <span className={_classes.parent+"__ico sliders__ico"}>
                                <img src={item.ico} className="img" alt="icon" />
                            </span>
                        }
                        {item.thumb &&
                            <span className={_classes.parent+"__thumb sliders__thumb"}>
                                <img src={item.thumb} className="img" alt="thumbnail" />
                            </span>
                        }
                        {item.text &&
                            <span className={_classes.parent+"__text sliders__text"}>
                                {item.text}
                            </span>
                        }
                        {item.html &&
                            <div className={_classes.parent+"__box sliders__box"} dangerouslySetInnerHTML={{__html:item.html}}></div>
                        }
                    </Link>
                </div>
            )
        }
        </SwipeableViews>
    )
}