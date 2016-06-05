// /jsx/First.jsx
require('react');
var HelloWorld = React.createClass({
    render: function () {
        return (
            <div>Hello {this.props.name}</div>
        );
}
});

var test = React.createClass({
    render:function () {
        //var objects=new{ item:[{id:1},{id:2},{id:3},{id:4}]} ;
        return(
            <tbody></tbody>
        );
        }
    }) ;

var MyTextfield = React.createClass({
    render: function() {
        return <input type='text' />;
    }
});
var MyButton = React.createClass({
    render: function() {
        return <button>{this.props.textlabel}</button>;
    }
});