import React, {useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import avatar from '../../assets/images/avatar.jpg';

export const Home = () => {
  const theme = useContext(ThemeContext);
  const style = {
    backgroundColor: theme.palette.background.light,
  };
};
export default Home;
