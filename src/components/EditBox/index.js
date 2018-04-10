import React, { Component } from 'react'


export default class EditBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      comment: '',
      error: ''
    }
  }

  componentWillMount() {
    const { name, comment, id } = this.props
    
    this.setState({
      name, comment
    })

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
    const { activateEdit, id, editComment } = this.props

    if (!name || !comment) {
      this.setState({error: 'Can\'t add a blank card'})
      setTimeout(() => {
        this.setState({error: ''})
      }, 1600);
    } else {
      editComment({ newName: name, newComment: comment, userId: id });
      activateEdit();
    }
  }

  render() {

    return (
      <div className='msg-add-box'>
        <div className='name-input'>
          <input placeholder='Your name' value={this.state.name} onChange={this.onNameChange} />
        </div>

        <div className='comment-input'>
          <textarea rows="4" placeholder='Your comment' value={this.state.comment} onChange={this.onCommentChange} />
        </div>

        <div className='btn-input' onClick={() => this.onSubmit()} >
          Save
        </div>
      </div>
    );
  }

}
