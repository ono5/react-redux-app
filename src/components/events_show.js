import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { getEvent, deleteEvents, putEvent } from '../actions'

class EventsShow extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  // renderingが完了したらイベント情報を再取得する
  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
  }

  renderField(field) {
    const { input, label, type, meta: {touched, error}} = field
    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />)
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    // console.log(id)
    // console.log(this.props.match)
    await this.props.deleteEvents(id)
    this.props.history.push('/')
  }

  async onSubmit(values) {
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = {margin:12}
    return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div><Field label="Title" name="title" type="text" component={this.renderField}></Field></div>
          <div><Field label="Body" name="body" type="text" component={this.renderField}></Field></div>
          <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid}/>
          <RaisedButton label="Cancel" containerElement={<Link to="/" />}/>
          <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick} />
        </form>
      )
  }
}

const validate = values => {
  const errors = {}

  // validation message
  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

// 現在の状態, 持っているprops
const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event }
}
const mapDispatchToProps = ({ deleteEvents, getEvent, putEvent })

export default connect(mapStateToProps, mapDispatchToProps)(
  // Error: Field must be inside a component decorated with reduxForm()対策
  // reduxForm関数で帰ってくる引数にEventsNewを入れる
  // enableReinitializeは、initialValuesの値が変わるたびにformが初期化される
  // https://redux-form.com/6.0.0-rc.4/docs/api/reduxform.md/
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
)
