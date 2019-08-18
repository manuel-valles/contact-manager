import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState(() => {
      return { [name]: value };
    });
  };

  onSubmit = (dispatch, event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        ...this.state,
        id: uuid()
      }
    });
    this.setState({
      name: '',
      email: '',
      phone: ''
    });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="name"
                      placeholder="Enter name"
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="phone"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div>
                  <button className="btn btn-light btn-block">
                    Add contact
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
