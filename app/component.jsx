import './component.css';
import React from 'react';


//export default React.createClass({
//    render: function () {
//        return <h1>Hello world!</h1>
//    }
//});

class Hello extends React.Component {
    render() {
        return (
            <div className="component-wrapper">
                Hi world!!
            </div>
        );
    }
};

export default Hello;