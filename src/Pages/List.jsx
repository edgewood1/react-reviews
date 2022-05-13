import React, { useState, useEffect } from 'react';
import { useNavigate, generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Card from '../Components/Card';
import { read } from '../Api';

const List = ({ isDesktop }) => {
  const size = isDesktop ? 3 : 12;
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const apiCall = async () => {
    const response = await read();
    setData(response);
  };

  useEffect(() => {
    apiCall();
  }, []);

  const handleListClick = (id) => {
    navigate(generatePath('/details/:id', { id }));
  };

  return (
    <Grid container spacing={6}>
      {data ? data.map((review) => (
        <Grid key={review.id} onClick={() => handleListClick(review.id)} item xs={size}>
          <Card main review={review} />
        </Grid>
      )) : ''}
    </Grid>
  );
};

export default List;

List.propTypes = {
  isDesktop: PropTypes.bool.isRequired
};
