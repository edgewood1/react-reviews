import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Card = ({onModal, response, review, navToList}) => {
  const {id} = useParams();
  const rating = review.rating ?? '';

  const reviewCard = () => (
    <div>
      {id? (
        <div>
          <ArrowBackIcon onClick={ navToList }/>
          <Typography>{review.place}</Typography>
        </div>)
      : ''}
      
      <Rating value={rating}> </Rating>
      {id ? <Typography>{review.content}</Typography>: ''}
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>{review.author}</Typography>
        <Typography>{new Date(review.published_at).toLocaleDateString()}</Typography>
        {id && !review.review ? <Fab onClick={onModal}> <AddIcon /> </Fab> : ''}
      </Box>
    </div>
  )

  const responseCard = () => (
    <div>
      <EditIcon onClick={onModal}/> 
      <Typography>{review.review}</Typography> 
    </div>
  )
 
  return (
    review.published_at ?   
    <Paper elevation={2}>
      <Box padding={2}>
        {!response ? reviewCard()  : ''}
        {review.review && response ? responseCard() : ''}
      </Box>
    </Paper>
    : ''
  )
}
    