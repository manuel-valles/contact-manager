import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Manu',
        email: 'm@m.m',
        phone: '1-1-1'
      },
      {
        id: 2,
        name: 'Raul',
        email: 'r@r.r',
        phone: '2-2-2'
      },
      {
        id: 3,
        name: 'Val',
        email: 'v@v.v',
        phone: '3-3-3'
      }
    ]
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
