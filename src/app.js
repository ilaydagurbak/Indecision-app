console.log('App.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Let me decide for you!'
}

//JSX - JavaScript XML
var template = (
    <div>
        <h1> {app.title} </h1> 
        <p> {app.subtitle} </p>
        <ol> 
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Ilayda Gurbak',
    age: 23,
    location: 'Istanbul'
};
function getLocation() {
    return 'Unknown';
}
var userName = 'Ilayda Gurbak';
var userAge = 23;
var userLocation = 'Istanbul';
var template2 = (
    <div> 
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);