import React, {Component} from 'react';
import ListContacts from './ListContacts';
import * as ContactApi from './utils/ContactsAPI';

class App extends Component {
    state = {
        contacts: []
    };

    componentDidMount() {
        ContactApi.getAll().then((contacts) => {
            this.setState({contacts})
        })
    }
    removeContact = contact => {
        this.setState(state => ({
            contacts: state.contacts.filter(c => c.id !== contact.id)
        }));
        ContactApi.remove(contact)
    };

    render() {
        return (
            <div>
                <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
            </div>
        );
    }
}

export default App;
