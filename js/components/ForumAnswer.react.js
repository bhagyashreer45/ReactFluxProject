// let React=require('react');

let ForumAnswer=React.createClass({

    propTypes:{
      answer: React.PropTypes.object.isRequired,
      _onMarkCorrect: React.PropTypes.func.isRequired
    },

    _markCorrect:function () {
        this.props.onMarkCorrect(this.props.id);
    },

    render: function () {
         let answer = this.props.answer;
         let markAnswer;

         if(!answer.correct){
             markAnswer=<div className="pull-right">
                 <small><a href="#" onClick={this._markCorrect}>Mark as Correct</a></small>
             </div>;
         }

         let classNames="panel-body";

         if(answer.correct){
             classNames +=" bg-success"
         }

        return(
            <div className="panel panel-default">
                <div className={classNames}>
                    {answer.body}
                    {markAnswer}
                </div>
            </div>
        )
    }
});