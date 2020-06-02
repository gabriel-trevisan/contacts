import React from 'react';

import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import './App.scss';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      contacts: [],
      search: ''
    }
  }

  getContacts() {
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            contacts: result
          });
        }
      )
  }

  componentDidMount(){
    this.getContacts();
  }

  handleFilter = (value) => (this.setState({ search: value.toLowerCase()}));

  render() {

    const filteredContacts = this.state.contacts.filter((contact) => {
      return contact.name.toLowerCase().indexOf(this.state.search) >= 0;
    })

    return (
      <React.Fragment>
        <Topbar>
          <LogoSvg alt="Logo Instagram" />
        </Topbar>
        <Filters handleFilter={this.handleFilter} />
        <Contacts contacts={filteredContacts} />
      </React.Fragment>
    )
  }
}

export default App;