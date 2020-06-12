import React, {useContext} from 'react';
import './style.scss';

export const ListUsers = ({listUsers}) => {
  const list = listUsers.map((object) => {
    <li>{object.fullname}</li>;
  });
  return <ul>{list}</ul>;
};
export default ListUsers;
