import React from 'react'
import { Link } from "react-router-dom";

import './LinkLists.scss'

export const LinkLists = props =>{
    const { items } = props;
    const _classes = {
        parent : (props.className)?props.className+"__lists":"",
    }

    return (
        <ul className={_classes.parent+" lists"}>
        {
            items.map((item,index)=>
                <li className={_classes.parent+"__item lists__item"} key={"_classes.parent_"+index}>
                    <Link to={item.src} className={_classes.parent+"__link lists__link"}>
                        {item.ico &&
                            <span className={_classes.parent+"__ico lists__ico"}>
                                <img src={item.ico} className="img" alt="icon" />
                            </span>
                        }
                        {item.thumb &&
                            <span className={_classes.parent+"__thumb lists__thumb"}>
                                <img src={item.thumb} className="img" alt="thumbnail" />
                            </span>
                        }
                        {item.text &&
                            <span className={_classes.parent+"__text lists__text"}>
                                {item.text}
                            </span>
                        }
                        {item.html &&
                            <div className={_classes.parent+"__box lists__box"} dangerouslySetInnerHTML={{__html:item.html}}></div>
                        }
                    </Link>
                </li>
            )
        }
        </ul>
    )
}