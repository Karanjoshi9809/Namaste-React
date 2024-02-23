// This is first thing to understand in react what it does
// It simply returns HTML of diffrent parts of your project/website

// Creating single html element
// const heading = React.createElement("h1", {}, "Welcome to Namaste React") 

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