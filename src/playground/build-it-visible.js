const app = {
    title: 'Visibility app',
    details: 'Now you can see me!'
}
const toggleVisibility = () => {
    visibility = !visibility
    render()
}

const appRoot = document.getElementById('app');
let visibility = false
const render = () => {
const template = (
<div>
    <h1> {app.title} </h1>
    <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
    </button>
    {visibility && (
        <div>
            <p> {app.details} </p>
        </div> 
    )}
</div>
)

ReactDOM.render(template, appRoot)
}

render()



