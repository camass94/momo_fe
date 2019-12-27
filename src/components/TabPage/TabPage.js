import React, { useState,  } from 'react'
import { Button, Tabs, Tab, Typography, Box } from '@material-ui/core'
import { Link } from "react-router-dom";

import './TabPage.scss'

export const TabPage = props =>{
    const { items } = props;
    const _classes = {
        parent : (props.className)?props.className:"",
        tabs : (props.className)?"__tabs tabs":"tabs",
        tab : (props.className)?"__tab tab":"tab",
        tabpanel : (props.className)?"__tabpanel tabpanel":"tabpanel",
    }
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const handleChangeIndex = index => {
        setValue(index)
    }
    const TabPanel = props => {
        const { children, value, index, ...other } = props;
        
        return (
            <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`momo-tabpanel-${index}`}
            aria-labelledby={`momo-tab-${index}`}
            {...other}
            >
            {value === index && <Box p={3}>{children}</Box>}
            </Typography>
        );
    }
    const a11yProps = index => {
        return {
          id: `momo-tab-${index}`,
          'aria-controls': `momo-tabpanel-${index}`,
        };
    }
    console.log(">>", props)

    return (
        <div className={_classes.parent+_classes.tabs}>
            <Tabs value={value} onChange={handleChange} aria-label="momo tabs example">
            {items.map((item,index)=>
                <Tab className={_classes.parent+_classes.tab} label={item.text} {...a11yProps(index)} />
            )}
            </Tabs>
            {items.map((item,index)=>
                <TabPanel value={value} index={index} >
                    <item.link className={_classes.parent+_classes.tabpanel} items={item} />
                </TabPanel>
            )}
        </div>
    )
}