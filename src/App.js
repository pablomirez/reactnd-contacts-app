import React, { Component } from 'react';
import ListContacts from './ListContacts'

class App extends Component {

    state = {
        contacts: [
        {
            id: 'tyler',
            name: 'Pablo McGinnis',
            handle: '@tylermcginnis',
            avatarUrl: 'http://localhost:5001/tyler.jpg'
        },
        {
            id: 'karen',
            name: 'Karen Isgrigg',
            handle: '@karen_isgrigg',
            avatarUrl: 'http://localhost:5001/karen.jpg'
        },
        {
            id: 'richard',
            name: 'Monica Kalehoff',
            avatarUrl: 'http://localhost:5001/richard.jpg'
        }
    ]
    }

    removeContact = (contact) => {
        this.setState((currentState) => ({
            contacts:currentState.contacts.filter((c) => {
                return c.id !== contact.id
            })
        }))
    }

    render() {
        return (
           <div>
               <ListContacts
                   contacts = { this.state.contacts }
                   onDeleteContact = { this.removeContact }
               />
           </div>
        )
    }
}


export default App