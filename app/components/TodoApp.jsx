var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk outside'
        },
        {
          id: 2,
          text: 'Lift some weights'
        },
        {
          id: 3,
          text: 'Leave mail on porch'
        },
        {
          id: 4,
          text: 'Make some games and music'
        }
      ]
    };
  },  
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;