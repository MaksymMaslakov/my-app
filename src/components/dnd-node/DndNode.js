import React from 'react'
import classnames from 'classnames'
import styles from './dnd-node.module.scss'
import loginIcon from '../../resources/loginIcon.png'

export const DndNode = ({icon = loginIcon, title = 'Events:all', color = '#A5A7AB', isIconFirst = true, isInMenuPanel}) => {
    return (
        <div className={styles.node}>
            <div className={classnames(styles.node_icon_container, !isIconFirst && styles.reverse_order)}>
                <img className={styles.node_icon} src={icon} alt="" />
            </div>
            <div className={classnames(styles.node_title_container, !isIconFirst && styles.add_pl)}>
                <p className={styles.node_title} style={{color: color}}>
                    { title }
                </p>
            </div>
            <span className={styles.node_circle__start} />
            <span className={styles.node_circle__end} />
        </div>
    )
}
