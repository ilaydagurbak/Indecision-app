class IndecisionApp extends React.Component {
    render() {
        return  (
            <div> 
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> Indecision </h1>
                <h2> Let me decide for you! </h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return  (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div> 
                Option
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                Add option
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))