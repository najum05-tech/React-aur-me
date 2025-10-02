import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}
// const reactElement = {
//     type: 'a',
//     props: {
//         href : 'https://www.google.com',
//         target: '_blank',
//     },
//     children :  'Click me to visit google'
// }

const anotherElement =  (
        <a href="https://www.google.com" target="_blank">
        Click me to visit google</a>
    )
 
    const anotherUser = "Me or React"

const reactElement = React.createElement(
    'a',
    {href: 'https://www.google.com', target: '_blank' },
    'Click me to visit google',
    anotherUser
)


createRoot(document.getElementById('root')).render(
    reactElement
  
) 
