const ADD_POST = 'ADD-POST';
const NEW_CHANGE_POST = 'NEW-CHANGE-POST';

export const addPostActionCreate = () => ({ type: ADD_POST });
export const newChangePostActionCreate = (action) => ({ type: NEW_CHANGE_POST, newText: action });

let initialState = {
  posts: [
    { id: 1, text: "It's my first post", userName: "Dima", nickName: "@dimonlev", verified: true },
    { id: 2, text: "It's my second post", userName: "Dima", nickName: "@dimonlev", verified: true },
    { id: 3, text: "It's my third post", userName: "Dima", nickName: "@dimonlev", verified: true },
    { id: 4, text: "It's my fourth post", userName: "Dima", nickName: "@dimonlev", verified: true },
    { id: 5, text: "It's my fifth post", userName: "Dima", nickName: "@dimonlev", verified: true },
    { id: 6, text: "It's my sixth post", userName: "Dima", nickName: "@dimonlev", verified: true },
  ],
  tempText: ""
}

const postsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 7, text: state.tempText, userName: "Dima", nickName: "@dimonlev", verified: true
      }
      state.posts.push(newPost);
      state.tempText = '';
      return state;

    case NEW_CHANGE_POST: state.tempText = action.newText;
      return state;

    default: return state
  }
}

export default postsReduser