import "./App.css";
import React, { Component } from "react";
import shortid from "shortid";
// import styled from "styled-components";

import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { FormContainer, ContactsTitle } from "./App.styled";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  // запись в контакты новый контакт
  addContact = ({ name, number }) => {
    const userContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, userContact],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevstate) => ({
      contacts: prevstate.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  // сохраняем в стейт данные фильтра
  changeInputFilter = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  // получаю и записываю в состояние распаршеные контакты из локала
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContatcts = JSON.parse(contacts);
    this.setState({ contacts: parsedContatcts });
  }

  // сравнение нового контакта с имеющимся, запись нового в локал
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts?.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <FormContainer>
        <ContactForm
          onSubmit={this.addContact}
          contacts={this.state.contacts}
        />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter filter={this.state.filter} onChange={this.changeInputFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </FormContainer>
    );
  }
}

export default App;
