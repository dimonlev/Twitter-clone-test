import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialog = [
  { id: 1, name: "Dima", nickName: "@dimonlev" },
  { id: 2, name: "Sveta", nickName: "@svetalev" },
  { id: 3, name: "Vano", nickName: "@vano" },
  { id: 4, name: "Kolyn", nickName: "@omny" },
  { id: 5, name: "Sasha", nickName: "@claster" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
];

let message = [
  { id: 1, text: "How are you?", date: 2020 },
  { id: 2, text: "I'm fine", date: 2020 },
  { id: 3, text: "How are you?", date: 2020 },
  { id: 4, text: "How are you?", date: 2020 },
  { id: 5, text: "Where you going", date: 2020 },
  { id: 6, text: "How are you?", date: 2020 },
];

let posts = [
  {id:1, text: "It's my first post"},
  {id:2, text: "It's my second post"},
  {id:3, text: "It's my third post"},
  {id:4, text: "It's my fourth post"},
  {id:5, text: "It's my fifth post"},
  {id:6, text: "It's my sixth post"},
  {id:6, text: "It's my sixth post"},
  {id:6, text: "It's my sixth post"},
  {id:6, text: "It's my sixth post"},
  {id:6, text: "It's my sixth post"},
  {id:6, text: "It's my sixth post"},
  {id:6, text: "It's my sixth post"},
  {id:6, text: "It's my sixth post"},
  {id:6, text: "It's my sixth post"},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialog={dialog} message={message} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
