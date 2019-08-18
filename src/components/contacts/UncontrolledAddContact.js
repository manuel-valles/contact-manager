import React, { Component } from 'react';

class UncontrolledAddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  static defaultProps = {
    name: 'Manu',
    email: 'm@m.m',
    phone: '1-1-1'
  };

  onSubmit = event => {
    event.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Uncontrolled Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                placeholder="Enter name"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                placeholder="Enter email"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="phone"
                placeholder="Enter phone number"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <button className="btn btn-light btn-block">Add contact</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UncontrolledAddContact;
