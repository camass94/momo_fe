import React, { useState,  } from 'react'
import { Button, TextField, InputBase } from '@material-ui/core'

import { LinkLists } from 'components/LinkLists/LinkLists.js'
import { SearchForm } from 'components/SearchForm/SearchForm.js'

import btnLocation from 'images/icons/btn_location.svg'
import btnMenu from 'images/icons/btn_menu.svg'
import icoStar from 'images/icons/ico_star.svg'

export const Header = props => {
    const {items} = props;
    const _classes = {
        parent : (props.className)?props.className+"__header":"",
        root: "header",
    }

    return (
        <div className={_classes.parent+" header"}>
            <button type="button" className={_classes.parent+"__btn "+_classes.parent+"__btn--menu btn"} onClick={items.toggleDrawer('left', true)}>
                <img src={btnMenu} alt="menu" className="icon" />
            </button>
            <button type="button" className={_classes.parent+"__btn "+_classes.parent+"__btn--location btn"}>
                <img src={btnLocation} alt="location" className="icon" />
            </button>
            {items.mainHeadline &&
                <div className={_classes.parent+"__headline headline"}>
                    <p className="headline__text--align-left" dangerouslySetInnerHTML={{__html:items.mainHeadline}}></p>
                </div>
            }
            <form className={_classes.parent+"__form form"}>
                <SearchForm className={"form"} items={items}/>
                {items.searchItems && 
                    <div className={"form__recommend recommend"}>
                        <div className={"form__recommend__title recommend__title"}>
                            <img className="icon icon-star" src={icoStar} alt="icon" />
                            추천검색어
                        </div>
                        <LinkLists className={"form__recommend"} items={items.searchItems[0]}/>
                    </div>
                }
            </form>
        </div>
    );
}
