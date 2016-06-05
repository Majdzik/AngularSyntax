"use strict";
const React = require("react");
class Hello extends React.Component {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
exports.Hello = Hello;
