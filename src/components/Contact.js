import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onToggle = () => {
    this.setState(prevState => ({
      showContactInfo: !prevState.showContactInfo
    }));
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={this.onToggle}
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            onClick={this.onDeleteClick}
            className="far fa-trash-alt"
            style={{ cursor: ' pointer', float: 'right', color: 'red' }}
          />
        </h4>
        {showContactInfo && (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        )}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
