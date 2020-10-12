import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom"

import styles from './app.module.scss'
import Main from './pages/main/Main'
import Dnd from './pages/dnd/Dnd'

function App() {
    return (
        <div className={styles.app}>
            <Switch>
                <Route path='/' component={Dnd} exact/>
                <Route path='/main' component={Main} exact/>
            </Switch>
        </div>
    );
}

export default App;
