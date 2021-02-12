import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { GlobalStyles } from './global-styles'
import { FirebaseContext } from './context/firebase'

import { seedDatabase } from './seed'

const config = {
    apiKey: "AIzaSyCSGhlERc_MuiKCsWZQmSVyioY8IVOfr1U",
    authDomain: "clone-net.firebaseapp.com",
    projectId: "clone-net",
    storageBucket: "clone-net.appspot.com",
    messagingSenderId: "914814199435",
    appId: "1:914814199435:web:4135b280b646b462b8568e",

}

const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
)
