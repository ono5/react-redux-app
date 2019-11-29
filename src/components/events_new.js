import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';

// import { postEvent } from '../actions'


class EventsNew extends Component {
  renderField(field) {
    const { input, label, type, meta: {touched, error}} = field
    return (<div>
              <input {...input} placeholder={label} type={type} />   
              {touched && error && <span>{error}</span>}
            </div>)
  }
  render() {
    return (
        <form>
          <div><Field label="Title" name="title" type="text" component={this.renderField}></Field></div>
          <div><Field label="Body" name="body" type="text" component={this.renderField}></Field></div>

          <div>
            <input type="submit" value="Submit" disabled={false} />
            <Link to="/">Cancel</Link>
          </div>
        </form>
      )
  }
}

// const mapDispatchToProps = ({ postEvents })
const validate = values => {
  const errors = {}

  return errors
}

export default connect(null, null)(
  // Error: Field must be inside a component decorated with reduxForm()対策
  // reduxForm関数で帰ってくる引数にEventsNewを入れる　
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
