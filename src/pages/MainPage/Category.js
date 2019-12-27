import React, { useState,  } from 'react'
import { Button, TextField, InputBase } from '@material-ui/core'

import { LinkLists } from 'components/LinkLists/LinkLists.js'


export const Category = props => {
    const {items} = props;
    const _classes = {
        parent : (props.className)?props.className+"__category":"category",
    }
    return (
        <div className={_classes.parent+" category"}>
            <LinkLists className="category" items={items}/>
        </div>
    );
}