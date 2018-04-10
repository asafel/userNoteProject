import React, { Component } from 'react';
import EditBox from '../EditBox'
import Dotdotdot from 'react-dotdotdot';

import './style.scss';

export default class Card extends Component {

  constructor(props) {
    super(props)

    this.state = {
      edit: false
    }
  }

  activateEdit() {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    const { name, comment, avatar, id, removeComment, editComment } = this.props
    const { edit } = this.state

    return (
      <div>
        <div className='card-container' style={{ display: `${!!edit ? 'none' : 'flex'}`}}>
          <div className='avatar-section'>
            <img src={avatar} />
          </div>

          <div className='main-section'>
            <div className='card-name'>
              {name}
            </div>

            <div className='card-comment'>
              <Dotdotdot clamp={2}> {comment} </Dotdotdot>
            </div>
          </div>

          <div className='btns-section'>
            <i className="fa fa-pencil" aria-hidden="true" onClick={() => this.activateEdit()}></i>
            <i className="fa fa-trash-o" aria-hidden="true" onClick={() => removeComment(id)}></i>
          </div>
        </div>
        
        <div className='card-edit-container' style={{ display: `${!!edit ? 'flex' : 'none'}`}}>
          <EditBox {...this.props} editComment={editComment} activateEdit={() => this.activateEdit()} />
        </div>
      </div>
    );
  }

}
