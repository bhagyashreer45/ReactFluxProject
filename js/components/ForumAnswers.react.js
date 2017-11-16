// let React=require('react');
// let ForumAnswer=require('./ForumAnswer.react');
// let ForumActions=require('../actions/ForumActions');

let ForumAnswers= React.createClass({

    _onMarkCorrect: function (id) {
     ForumActions.markAnswerCorrect(id);
    },

    render: function () {
       let allAnswers= this.props.allAnswers;
       let answers=[];
       for(let key in allAnswers){
           answers.push(<ForumAnswer key={key} id={key} answer={allAnswers[key]} onMarkCorrect={this._onMarkCorrect}/>)
       }
       return(
           <div>
               {answers}
           </div>
       )
   }
});