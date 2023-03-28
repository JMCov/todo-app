import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { SettingsContext } from '../../Context/Settings';
import { v4 as uuid } from 'uuid';
import List from '../List';
import Header from '../Header';
import { Pagination } from '@mantine/core';
import './todo.css';

const Todo = () => {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const [display, setDisplay] = useState([...list]);
  const [currentPage, setCurrentPage] = useState(1)
  const { items, showCompleted, sort } = useContext(SettingsContext);


  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let listToRender = list.filter(item => !item.complete);
    setIncomplete(listToRender);
    let listStart = (currentPage - 1) * items;
    let listEnd = items + listStart
    let showItems = showCompleted ? list : listToRender;
    let display = showItems.slice(listStart, listEnd);
    setDisplay(display);
  }, [list, currentPage, items, showCompleted])

  return (
    <>
      <Header incomplete={incomplete} />
      <div className="form-list"> 
        <form onSubmit={handleSubmit} className="form-container">

          <h2 className="form-h2">Add To Do Item</h2>

          <label className="todo-item">
            <span>To Do Item</span>
            <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
          </label>

          <label className="assignee">
            <span>Assigned To</span>
            <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
          </label>

          <label className="difficulty">
            <span>Difficulty</span>
            <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
          </label>

          <label className="submit-button">
            <button type="submit">Add Item</button>
          </label>
        </form>

        <List 
          display={display} 
          toggleComplete={toggleComplete} 
        />
      </div>
      <Pagination
        total={Math.ceil(list.length / items)}
        value={currentPage}
        onChange={(value) => setCurrentPage(value)}
      />
    </>
  );
};

export default Todo;
