import React from 'react';

function List<ListItem>({ items, render }: { items: ListItem[]; render: (item: ListItem) => React.ReactNode }) {
  return (
    <ul>
      {items.map((item: ListItem, index: number) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

interface Props {}

const NotFound: React.FC<{ title?: string }> = ({ title = 'Not Found' }) => {
  return (
    <div>
      {title} <List items={['nothing']} render={(items) => <h1>{items}</h1>}></List>
    </div>
  );
};

export default NotFound;
