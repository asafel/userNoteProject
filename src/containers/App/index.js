import React, { Component } from 'react';
import MessageAddBox from 'Components/MessageAddBox';
import Card from 'Components/Card';
import { connect } from 'react-redux';
import { removeComment, addComment, editComment } from 'Actions/app';

import './style.scss'


class App extends Component {

  renderCards() {
    const { cards, editComment, removeComment  } = this.props
    const result = []

    for (var key in cards) {
      // check if the property/key is defined in the object itself, not in parent
      if (cards.hasOwnProperty(key)) {
        const { name, comment, avatar } = cards[key]
        result.push(
          <Card key={key}
                id={key}
                name={name}
                comment={comment}
                avatar={avatar}
                editComment={editComment}
                removeComment={removeComment} />)
      }
    }

    return result
  }

  render() {
    return (
      <div id='app-container'>
        <div id='head-line'>
          User Reviews
                </div>
        <div id='main-body-section'>
          {this.renderCards()}
          <MessageAddBox addComment={this.props.addComment} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cards }) => {

  return {
    cards
  }
}

const actions = {
  removeComment,
  addComment,
  editComment
}
export default connect(mapStateToProps, actions)(App);