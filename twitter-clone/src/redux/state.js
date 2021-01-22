import messagesReduser from "./messages-reduser";
import postsReduser from "./posts-reduser";

export let store = {
  _state: {
    homePage: {
      posts: [
        { id: 1, text: "It's my first post", userName: "Dima", nickName: "@dimonlev", verified: true },
        { id: 2, text: "It's my second post", userName: "Dima", nickName: "@dimonlev", verified: true },
        { id: 3, text: "It's my third post", userName: "Dima", nickName: "@dimonlev", verified: true },
        { id: 4, text: "It's my fourth post", userName: "Dima", nickName: "@dimonlev", verified: true },
        { id: 5, text: "It's my fifth post", userName: "Dima", nickName: "@dimonlev", verified: true },
        { id: 6, text: "It's my sixth post", userName: "Dima", nickName: "@dimonlev", verified: true },
      ],
      tempText: ""
    },
    messagePage: {
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
  },
  _callSubscriber() {
    console.log('state');
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.homePage = postsReduser(this._state.homePage, action);
    this._state.messagePage = messagesReduser(this._state.messagePage, action);
    this._callSubscriber(this._state);
  }
}

export default store