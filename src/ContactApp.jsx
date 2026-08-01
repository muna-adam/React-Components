import { useReducer, useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {

    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          ...action.payload,
          favorite: false
        }
      ];

    case "edit":
      return state.map(contact =>
        contact.id === action.payload.id
          ? action.payload
          : contact
      );

    case "delete":
      return state.filter(
        contact => contact.id !== action.payload
      );

    case "toggleFavorite":
      return state.map(contact =>
        contact.id === action.payload
          ? {
              ...contact,
              favorite: !contact.favorite
            }
          : contact
      );

    default:
      return state;
  }
}


function ContactApp() {

  const [contacts, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [editingContact, setEditingContact] = useState(null);


  return (
    <div>

      <h1>Contact Management App</h1>

      <ContactForm
        dispatch={dispatch}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />


      <ContactList
        contacts={contacts}
        dispatch={dispatch}
        setEditingContact={setEditingContact}
      />

    </div>
  );
}

export default ContactApp;