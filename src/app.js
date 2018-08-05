console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Let me decide for you!',
    options: ['One', 'Two']
};
//JSX - JavaScript XML
const template = (
    <div>
        <h1> {app.title} </h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol> 
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name: 'Ilayda',
    age: 23,
    location: 'Istanbul'
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}
const template2 = (
    <div> 
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) &&  <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);