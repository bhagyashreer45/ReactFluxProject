// let React=require('react');

let ForumAddAnswerBox = React.createClass({
    displayName: "ForumAddAnswerBox",


    getInitialState: function () {
        return {
            value: ''
        };
    },
    _addAnswer: function () {
        this.props.onAddAnswer(this.state.value);
    },
    _onChange: function (event) {
        this.setState({
            value: event.target.value
        });
    },
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement("textarea", { id: "addAnswer", className: "col-md-6 col-xs-8", onChange: this._onChange }),
            "\xA0",
            React.createElement("input", { type: "button", className: "btn btn-primary", value: "Add", onClick: this._addAnswer })
        );
    }

});