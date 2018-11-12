import React, {Component} from 'react';
import ListContacts from './ListContacts';
import * as ContactApi from './utils/ContactsAPI';
import CreateContact from "./CreateContact";

class App extends Component {
    state = {
        screen: 'list',
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
            <div className="app">
                {this.state.screen === 'list' && (
                    <ListContacts
                        onDeleteContact={this.removeContact}
                        contacts={this.state.contacts}
                        onNavigate={() => {
                            this.setState({ screen: 'create' })
                        }}
                    />
                )}
                {this.state.screen === 'create' && (
                    <CreateContact/>
                )}

            </div>
        );
    }
}

export default App;
