import React, { useState,  } from 'react'
import { Button, TextField, Input, InputBase } from '@material-ui/core'

import { LinkLists } from 'components/LinkLists/LinkLists.js'

import btnSearch from 'images/icons/btn_search.svg'

import './SearchForm.scss'

export const SearchForm = props =>{
    const {items} = props;
    const _classes = {
        parent : (props.className)?props.className+"__search-form":"",
    }

    return (
        <div className={_classes.parent+" search-form"}>
            <input 
                placeholder="Search..." 
                className={_classes.parent+"__input search-form__input"}
                /* classes={{
                    root: _classes.parent+"__root search-form__root",
                    input: _classes.parent+"__input search-form__input"
                }} */
            />
            <button type="button" className={_classes.parent+"__btn search-form__btn btn"+_classes.parent+"__btn--search btn"}>
                <img className="icon" src={btnSearch} alt="search icon" />
            </button>
        </div>
    )
}