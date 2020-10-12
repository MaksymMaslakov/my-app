import React from "react"
import {DndNode} from "../dnd-node/DndNode"

import styles from './dnd-menu.module.scss'
import plusIcon from "../../resources/plusIcon.png";
import loginIcon from '../../resources/loginIcon.png';
import dnsIcon from '../../resources/dnsIcon.png'

export const DndMenu = () => {
    const inputNodeList = (new Array(10)).fill(<DndNode icon={loginIcon}/>);
    const outputNodeList = (new Array(10))
        .fill(<DndNode title={"Debug"} icon={dnsIcon} isIconFirst={false}/>);

    const getTitleMenu = (title) => (
        <div className={styles.menu_title_container}>
            <p className={styles.menu_title}>{title}</p>
            <button className={styles.menu_title_buttom_plus}>
                <img className={styles.menu_title_buttom_plus_icon} src={plusIcon} alt="" />
            </button>
        </div>
    );

    const getMenuBlock = (title, nodeList) => (
        <div>
            { getTitleMenu(title) }
            <div className={styles.node_list}>
                { nodeList.map(item => (item)) }
            </div>
        </div>
    )

    return (
        <div className={styles.menu}>
            { getMenuBlock("Input", inputNodeList) }
            { getMenuBlock("Output", outputNodeList) }
        </div>
    )
};
