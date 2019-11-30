import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';

import { getEvent, deleteEvents, pugEvent } from '../actions'

class EventsShow extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: {touched, error}} = field
    return (<div>
              <input {...input} placeholder={label} type={type} />   
              {touched && error && <span>{error}</span>}
            </div>)
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    // console.log(id)
    // console.log(this.props.match)
    await this.props.deleteEvents(id)
    this.props.history.push('/')
  }

  async onSubmit(values) {
    // await this.props.postEvents(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div><Field label="Title" name="title" type="text" component={this.renderField}></Field></div>
          <div><Field label="Body" name="body" type="text" component={this.renderField}></Field></div>

          <div>
            <input type="submit" value="Submit" disabled={pristine || submitting} />
            <Link to="/">Cancel</Link>
            <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
          </div>
        </form>
      )
  }
}

const mapDispatchToProps = ({ deleteEvents })

const validate = values => {
  const errors = {}

  // validation message
  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

export default connect(null, mapDispatchToProps)(
  // Error: Field must be inside a component decorated with reduxForm()対策
  // reduxForm関数で帰ってくる引数にEventsNewを入れる　
  reduxForm({ validate, form: 'eventShowForm' })(EventsShow)
)