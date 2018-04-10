import React, { Component } from 'react';
const imgGen = require('@dudadev/random-img');
import './style.scss';

export default class MessageAddBox extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      comment: '',
      error: ''
    }

    this.onNameChange = this.onNameChange.bind(this)
    this.onCommentChange = this.onCommentChange.bind(this)
  }

  onNameChange(e) {
    const name = e.target.value
    this.setState({ name })
  }

  onCommentChange(e) {
    const comment = e.target.value
    this.setState({ comment })
  }

  onSubmit() {
    const { name, comment } = this.state
    if (!name || !comment) {
      this.setState({error: 'Can\'t add a blank card'})
      setTimeout(() => {
        this.setState({error: ''})
      }, 1600);
    } else {
      imgGen().then(avatar => {
        this.props.addComment({ name, comment, avatar })
        this.setState({
          name: '',
          comment: '',
          error: ''
        })
      });
    }
  }

  render() {
    const { addComment, name, comment } = this.props;

    return (
      <div className='msg-add-box'>
        <div className='name-input'>
          <input placeholder='Your name' value={this.state.name} onChange={this.onNameChange} />
        </div>

        <div className='comment-input'>
          <textarea rows="4" placeholder='Your comment' value={this.state.comment} onChange={this.onCommentChange} />
        </div>

        <div className='btn-input' onClick={() => this.onSubmit()} >
          Add
        </div>
        <div className='box-error'>{this.state.error}</div>
      </div>
    );
  }
}
