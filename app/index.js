var React = require('react');
var ReactDOM = require('react-dom');

class Halo extends React.Component {
    render() {
        return (
            <div>
                <h1 id='title'>You are going to be okay, {this.props.name}</h1>
            </div>
        )
    }
}
ReactDOM.render
(
<Halo 
    name="Brian"/>, 
document.getElementById('app')
)
