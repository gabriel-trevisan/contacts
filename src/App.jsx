import React from 'react';

import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import data from "./data/data.json";

import './App.scss';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      contacts: [],
      search: '',
      order: '',
      asc: true
    }
  }

  getContacts() {
    // fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         contacts: result
    //       });
    //     }
    //   )
    this.setState({
      contacts: data
    });
  }

  componentDidMount(){
    this.getContacts();
  }

  handleFilter = (value) => (this.setState({ search: value.toLowerCase()}));

  handleOrder = (value, asc) => (this.setState({ order: value, asc: asc}));

  render() {

    let filteredContacts = [];
    let {order, asc} = this.state;

    if(order) {
      filteredContacts = this.state.contacts.sort((a, b) => {
        if(asc){

          if (a[order] > b[order]) {
            return 1;
          }
          if (a[order] < b[order]) {
            return -1;
          }
          return 0;
          
        } else {

          if (a[order] < b[order]) {
            return 1;
          }
          if (a[order] > b[order]) {
            return -1;
          }
          return 0;

        }
      });
    } 

    filteredContacts = this.state.contacts.filter((contact) => {
      return contact.name.toLowerCase().indexOf(this.state.search) >= 0;
    })

    return (
      <React.Fragment>
        <Topbar>
          <LogoSvg alt="Logo Instagram" />
        </Topbar>
        <Filters handleFilter={this.handleFilter} handleOrder={this.handleOrder}/>
        <Contacts contacts={filteredContacts} />
      </React.Fragment>
    )
  }
}

export default App;
