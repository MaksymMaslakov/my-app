import React from 'react'
import styles from './dnd.module.scss'
import {DndMenu} from "../../components/dnd-menu/DndMenu";

function Dnd() {


    return (
        <div className={styles.page}>
            <div className={styles.menu_panel}>
                <DndMenu />
            </div>
            <div className={styles.main_panel}>

            </div>
            <div className={styles.right_panel}>

            </div>
        </div>
    );
}

export default Dnd;
