const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_ON_CHANGE = 'NEW-MESSAGE-ON-CHANGE';

export const addMessageActionCreate = () => ({ type: ADD_MESSAGE });
export const newMessageOnChangeActionCreate = (action) => ({ type: NEW_MESSAGE_ON_CHANGE, newText: action });

let initialState = {
  message: [
    { id: 1, text: "How are you?", date: 2020 },
    { id: 2, text: "I'm fine", date: 2020 },
    { id: 3, text: "How are you?", date: 2020 },
    { id: 4, text: "How are you?", date: 2020 },
    { id: 5, text: "Where you going", date: 2020 },
    { id: 6, text: "How are you?", date: 2020 },
  ],
  dialog: [
    { id: 1, name: "Dima", nickName: "@dimonlev" },
    { id: 2, name: "Sveta", nickName: "@svetalev" },
    { id: 3, name: "Vano", nickName: "@vano" },
    { id: 4, name: "Kolyan", nickName: "@omn1" },
    { id: 5, name: "Sasha", nickName: "@claster" },
    { id: 6, name: "Jenya", nickName: "@jenny" },
  ],
  tempDialog: '',
  tempMessage: ''
}

const messagesReduser = (state = initialState, action) => {
  switch (action.type) {

    case ADD_MESSAGE:
      let newPost = {

        id: 7, text: state.tempMessage, date: 2020
      }
      state.message.push(newPost);
      state.tempMessage = '';
      return state;

    case NEW_MESSAGE_ON_CHANGE: state.tempMessage = action.newText;
      return state;

    default: return state;
  }
}

export default messagesReduser