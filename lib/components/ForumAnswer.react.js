// let React=require('react');

let ForumAnswer = React.createClass({
    displayName: "ForumAnswer",


    propTypes: {
        answer: React.PropTypes.object.isRequired,
        _onMarkCorrect: React.PropTypes.func.isRequired
    },

    _markCorrect: function () {
        this.props.onMarkCorrect(this.props.id);
    },

    render: function () {
        let answer = this.props.answer;
        let markAnswer;

        if (!answer.correct) {
            markAnswer = React.createElement(
                "div",
                { className: "pull-right" },
                React.createElement(
                    "small",
                    null,
                    React.createElement(
                        "a",
                        { href: "#", onClick: this._markCorrect },
                        "Mark as Correct"
                    )
                )
            );
        }

        let classNames = "panel-body";

        if (answer.correct) {
            classNames += " bg-success";
        }

        return React.createElement(
            "div",
            { className: "panel panel-default" },
            React.createElement(
                "div",
                { className: classNames },
                answer.body,
                markAnswer
            )
        );
    }
});