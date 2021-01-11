// let rerenderEntireTree = () => {
//   console.log('state');
// }

// let state = {
//   homePage: {
//     posts: [
//       { id: 1, text: "It's my first post", userName: "Dima", nickName: "@dimonlev", verified: true },
//       { id: 2, text: "It's my second post", userName: "Dima", nickName: "@dimonlev", verified: true },
//       { id: 3, text: "It's my third post", userName: "Dima", nickName: "@dimonlev", verified: true },
//       { id: 4, text: "It's my fourth post", userName: "Dima", nickName: "@dimonlev", verified: true },
//       { id: 5, text: "It's my fifth post", userName: "Dima", nickName: "@dimonlev", verified: true },
//       { id: 6, text: "It's my sixth post", userName: "Dima", nickName: "@dimonlev", verified: true },
//     ],
//     tempText: ""
//   },
//   messagePage: {
//     message: [
//       { id: 1, text: "How are you?", date: 2020 },
//       { id: 2, text: "I'm fine", date: 2020 },
//       { id: 3, text: "How are you?", date: 2020 },
//       { id: 4, text: "How are you?", date: 2020 },
//       { id: 5, text: "Where you going", date: 2020 },
//       { id: 6, text: "How are you?", date: 2020 },
//     ],
//     dialog: [
//       { id: 1, name: "Dima", nickName: "@dimonlev" },
//       { id: 2, name: "Sveta", nickName: "@svetalev" },
//       { id: 3, name: "Vano", nickName: "@vano" },
//       { id: 4, name: "Kolyan", nickName: "@omn1" },
//       { id: 5, name: "Sasha", nickName: "@claster" },
//       { id: 6, name: "Jenya", nickName: "@jenny" },
//     ],
//     tempDialog: '',
//     tempMessage: ''
//   }
// }

// window.state = state;

// export let addPost = () => {
//   let newPost = {
//     id: 7, text: state.homePage.tempText, userName: "Dima", nickName: "@dimonlev", verified: true
//   }
//   state.homePage.posts.push(newPost);
//   state.homePage.tempText = '';
//   rerenderEntireTree(state);
// }

// export let newChangePost = (changePost) => {
//   state.homePage.tempText = changePost;
//   rerenderEntireTree(state);
//   console.log(state.homePage.tempText);

// }

// export let addMessage = () => {
//   let newPost = {
//     id: 7, text: state.messagePage.tempMessage, date: 2020
//   }
//   state.messagePage.message.push(newPost);
//   state.messagePage.tempMessage = "";
//   rerenderEntireTree(state);
// }

// export let newMessageOnChange = (newMessage) => {
//   state.messagePage.tempMessage = newMessage;
//   rerenderEntireTree(state);
//   console.log(state.messagePage.tempMessage);
// }
// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// }

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

  addPost() {
    let newPost = {
      id: 7, text: this._state.homePage.tempText, userName: "Dima", nickName: "@dimonlev", verified: true
    }
    this._state.homePage.posts.push(newPost);
    this._state.homePage.tempText = '';
    this._callSubscriber(this._state);
  },
  newChangePost(changePost) {
    this._state.homePage.tempText = changePost;
    this._callSubscriber(this._state);
  },
  addMessage() {

    let newPost = {

      id: 7, text: this._state.messagePage.tempMessage, date: 2020
    }
    this._state.messagePage.message.push(newPost);
    this._state.messagePage.tempMessage = '';
    this._callSubscriber(this._state);
  },
  newMessageOnChange(newMessage) {
    this._state.messagePage.tempMessage = newMessage;
    this._callSubscriber(this._state);
  },
  // dispatch(action) {
  //   switch (action) {
  //     case 'ADD-MESSAGE': this.addMessage();
  //       break;
  //     default: console.log("add object");


  //   }
  // }
}

export default store