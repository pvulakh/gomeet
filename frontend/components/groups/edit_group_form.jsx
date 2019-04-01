import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';

class EditGroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ...this.props.group,
      photoFile: null,
      photoUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId).then(({ group }) => {
      this.setState({...group});
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.group.id != this.props.match.params.groupId) {
      this.props.fetchGroup(this.props.match.params.groupId);
    }
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('group[id]', this.state.id);
    formData.append('group[title]', this.state.title);
    formData.append('group[description]', this.state.description);
    formData.append('group[creator_id]', this.state.creator_id);
    formData.append('group[lat]', this.state.lat);
    formData.append('group[lng]', this.state.lng);
    
    if (this.state.photoFile) {
      formData.append('group[photo]', this.state.photoFile);
    }

    this.props.action(formData).then(() => this.props.history.push('/find/gomeets'));
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => { 
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    if (!this.props.group) {
      return null;
    }
    
    return (
      <div className='edit-group-page'>
        <Route
          path="/create"
          render={
            () => {
              if (!this.props.currentUser) {
                return <Redirect to='/login' />
              } else if (this.props.currentUser != this.props.group.creator_id) {
                return <Redirect to="/" />
              }
            }
          }
        />
        <h1 className='update-group-h'>{this.state.title}</h1>
        
        <form className='update-group-form' onSubmit={this.handleSubmit}>
          <h3 className='update-group-subh'>About this GoMeet Group</h3>

          <div className='update-group-title'>
            <label>GoMeet Group name</label>
              <input type="text" value={this.state.title} onChange={this.handleChange('title')}/>
          </div>

          <div className='update-group-description'>
            <label>GoMeet group description</label>
            <p>What is this GoMeet's purpose? Who should join? Why?</p>
            <textarea value={this.state.description} onChange={this.handleChange('description')} />
          </div>

          <h3 className='update-group-subh'>Where</h3>
          <div className='update-group-location'>
            <div className='update-group-loc-vals'>
              <div>
                <label className='country'>Country</label>
                <span>USA</span>
              </div>
              <div>
                <label className='zip'>ZIP</label>
                <input type="text" id="zip-val" defaultValue='10001' />
              </div>
            </div>
            <p>Only city and town changes to your GoMeet are permitted.</p>
          </div>
          
          <h3 className='update-group-subh'>GoMeet group logo</h3>
          <div className='update-group-photo'>
            <label>Upload a new GoMeet photo</label>
            <input name="groupPhoto" id="groupPhotoFile" type="file" tabIndex="20" onChange={this.handleFile.bind(this)}></input>
          </div>
          <input type="submit" value='Save' className='update-button'/>
        </form>
      </div>
    );
  }
}

export default withRouter(EditGroupForm);