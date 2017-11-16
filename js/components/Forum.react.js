// let React=require('react');
// let ForumHeader=require('./ForumHeader.react');
// let ForumQuestion=require('./ForumQuestion.react');
// let ForumAnswers=require('./ForumAnswers.react');
// let ForumAddAnswerBox=require('./ForumAddAnswerBox.react');
// let ForumActions=require('../actions/ForumActions');
// let ForumStore=require('../stores/ForumStore');

let Forum= React.createClass({

    getInitialState: function () {
      return {
          allAnswers: ForumStore.getAnswers()
      }
    },

    componentDidMount: function () {
      ForumStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      ForumStore.removeListener(this._onChange);
    },
    _onChange: function () {
        this.setState({
            allAnswers: ForumStore.getAnswers()
        });
    },

    _onAddAnswer: function (answerText){
        ForumActions.addNewAnswer(answerText);
    },

    render: function () {
        return(
            <div>
                <ForumHeader/>
                <div className="container">
                    <ForumQuestion/>
                    <hr/>
                    <ForumAnswers allAnswers={this.state.allAnswers}/>
                    <hr/>
                    <h4>Add an Answer</h4>
                    <ForumAddAnswerBox onAddAnswer={this._onAddAnswer}/>
                </div>
            </div>
        );
    }
});