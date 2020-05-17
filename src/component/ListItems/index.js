import React, {useContext, useState} from 'react';
import './style.scss';
import ThemeContext from '../../contexts/ThemeContext';

const Items = (props) => {
  const theme = useContext(ThemeContext);
  const [styles, setStyles] = useState({
    color: theme.palette.navbar.hoverColor,
  });
  return (
    <li
      style={styles}
      onMouseOver={() => setStyles({color: theme.palette.navbar.titleColor})}
      onMouseOut={() => setStyles({color: theme.palette.navbar.hoverColor})}
    >
      {props.children}
    </li>
  );
};

export const ListItems = (props) => {
  const list = props.list.map((object) => (
    <Items key={object.id}>
      {props.icon}
      {object.name}
    </Items>
  ));
  return <ul>{list}</ul>;
};

export default ListItems;