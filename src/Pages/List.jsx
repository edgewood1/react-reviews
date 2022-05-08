import Grid from '@mui/material/Grid';
import { Card } from '../Components/Card';
import { useEffect, useState } from 'react';
import Api from '../Api'
import { generatePath, useNavigate} from "react-router-dom";

const List = ({isDesktop}) => {
  console.log('list!!')
  // hook props
  const [ data, setData ] = useState([]);
  const navigate = useNavigate();
  
  // make an api call 
  useEffect(() => {
    const apiCall = async () => {
      const response = await Api();  
      setData(response);
    }
    apiCall();
  },[]);

  const handleClick = (id) => {
    navigate(generatePath(`/details/:id`, {id}));
  }

  const size = isDesktop ? 3 : 12;
  return (
    <Grid container spacing={6}>
      {data.map(review => (
        <Grid key={review.id} onClick={() => handleClick(review.id)} item xs={size}>
          <Card review={review} />
        </Grid>
        )
      )}
    </Grid>
  )
}

export default List;