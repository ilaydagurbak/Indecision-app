'use strict';

console.log('App.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Let me decide for you!'

    //JSX - JavaScript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        app.title,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' ',
        app.subtitle,
        ' '
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
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
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
