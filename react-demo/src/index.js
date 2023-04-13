import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Person from './components/Person';
import TodoList from './components/TodoList';
import Props from './components/Props';
import ShoppingList from './components/shoppingList/ShoppingList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  // <Person />
  // <TodoList />
  // <Props />
  <ShoppingList />
);