// This is first thing to understand in react what it does
// It simply returns HTML of diffrent parts of your project/website

// Creating single html element
// const heading = React.createElement("h1", {}, "Welcome to Namaste React") 

import React from "react"
import ReactDOM from "react-dom/client"

// Creating multiple elements
const heading1 = React.createElement("h1", {}, "Welcome to Namaste React")
const heading2 = React.createElement("h2", {}, "This is super cool & knowledge heavy react course")

const contaier = React.createElement(
    "div",
    {
        id: "box-1",
        class: "container"
    },
    [heading1, heading2]
)


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(contaier)

/*
    Parcel or any bundler is beast
    They do following things
        Created A Server
        * HMR - Hot Module Replacement
        * File Watcher algorithm - C++
        * BUNDLING
        * MINIFY
        * Cleaning our Code
        * Dev abd Production Build
        * Super Fast build algorithm
        * Image Optimization
        * Caching while development
        * Compression
        * Compatble with older version of browser
        * HTTPS on dev
        * port Number
        * Consistent Hashing Algorithm
        * Zero Config
        * 
        * 
        * Transitive Dependencies 
*/