import React, { useState,  } from 'react'
import { Button, TextField, InputBase } from '@material-ui/core'

import { LinkLists } from 'components/LinkLists/LinkLists.js'


export const MainTab2 = props => {
    const {items} = props;
    console.log(props)
    const _classes = {
        parent : (props.className)?props.className+"__container":"",
    }
    return (
        <div className={_classes.parent+" container"}>
            MainTab2
        </div>
    );
}