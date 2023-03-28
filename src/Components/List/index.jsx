import React from 'react';
import { Button, Card, Text } from '@mantine/core';
import './list.css';

const List = ({ display, toggleComplete }) => {
  return (
    <div className="list-container">
      {display.map((item) => (
        <Card key={item.id} shadow="sm" className="list-card">
          <div className="list-header">
            <Text size="sm" className="pending">Pending</Text>
            <Text size="sm" className="list-assignee">{item.assignee}</Text>
            <Button variant="subtle" className="list-close-button" onClick={() => toggleComplete(item.id)}>X</Button>
          </div>
          <div className="list-body">
            <Text size="lg" className="list-item-text">{item.text}</Text>
            <Text size="sm" className="list-difficulty">{`Difficulty: ${item.difficulty}`}</Text>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default List;