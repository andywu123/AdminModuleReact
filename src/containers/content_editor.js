import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { fetchContent } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class ContentEditor extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate the user to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  }

  // retrieve json object from reducer
/*  componentWillMount() {
    // call action creator
    this.props.fetchContent();
  }*/

  render() {
    // helpers of redux form is injected by this.props
    //this.props.fetchContent();
    const { fields: { contentID, contentGroup, contentName,description,iconURL }, handleSubmit } = this.props;
    const contentObj = this.props.content;

    console.log(contentObj);
    return (
      <form /*onSubmit={handleSubmit(this.onSubmit.bind(this))}*/>
        <h3>Content Editor</h3>

        <div className={`form-group ${contentID.touched && contentID.invalid ? 'has-danger' : ''}`}>
          <label>Content ID</label>
          <input type="text" className="form-control" {...contentID}  />
          <div className="text-help">
            {contentID.touched ? contentID.error : ''}
          </div>
        </div>

        <div className={`form-group ${contentGroup.touched && contentGroup.invalid ? 'has-danger' : ''}`}>
          <label>Content Group</label>
          <input type="text" className="form-control" {...contentGroup} />
          <div className="text-help">
            {contentGroup.touched ? contentGroup.error : ''}
          </div>
        </div>

        <div className={`form-group ${contentName.touched && contentName.invalid ? 'has-danger' : ''}`}>
          <label>Content Name</label>
          <input type="text" className="form-control" {...contentName} />
          <div className="text-help">
            {contentName.touched ? contentName.error : ''}
          </div>
        </div>

        <div className={`form-group ${description.touched && description.invalid ? 'has-danger' : ''}`}>
          <label>Description</label>
          <input type="text" className="form-control" {...description} />
          <div className="text-help">
            {description.touched ? description.error : ''}
          </div>
        </div>

        <div className={`form-group ${iconURL.touched && iconURL.invalid ? 'has-danger' : ''}`}>
          <label>Icon URL</label>
          <input className="form-control" {...iconURL} />
          <div className="text-help">
            {iconURL.touched ? iconURL.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.contentName) {
    errors.contentName = 'Enter an username';
  }
  if (!values.description) {
    errors.description = 'Enter some description';
  }
  if(!values.iconURL) {
    errors.iconURL = 'Enter an iconURL';
  }

  return errors;
}

function mapStateToProps(state) {
  return { content: state.contents.content };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchContent }, dispatch);
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'contentEditorForm',
  fields: ['contentID', 'contentGroup', 'contentName', 'description', 'iconURL'],
  validate
}, mapStateToProps, mapDispatchToProps)(ContentEditor);
