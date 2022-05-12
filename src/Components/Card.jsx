import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useParams, useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

/**
 * Card - this returns either a mainCard or both a mainCard && reviewCard
 * @param handleModal { boolean } - opens / closes modal
 * @param main { boolean } - if true, displays review card; else data card
 * @param review { object } data
 */
export const Card = ({ handleModal, main, review }) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const rating = review.rating ?? '';

  const fabStyle = {

    background: 'linear-gradient(blue, yellow)',
    marginLeft: '95%',
    marginTop: '10px'
  }

  const boxStyle = {
    display: 'flex', 
    marginTop: '20px',
    justifyContent: 'space-between'
  }

  const mainCard = () => (
    <div>
      {id? (
        <div>
          <ArrowBackIcon onClick={ () => navigate('/') }/>
          <Typography>{review.place}</Typography>
        </div>)
      : ''}
      
      <Rating value={rating}> </Rating>
      {id ? <Typography>{review.content}</Typography>: ''}
      <Box sx={boxStyle}>
        <Typography>{review.author}</Typography>
        <Typography>{new Date(review.published_at).toLocaleDateString()}</Typography>
      </Box>
      {id && !review.review ? <Fab style={fabStyle} onClick={handleModal}> <AddIcon /> </Fab> : ''}
    </div>
  )

  const reviewCard = () => (
    <div>
      <EditIcon onClick={handleModal}/> 
      <Typography>{review.review}</Typography> 
    </div>
  )
 
  return (
    review.published_at ?   
    <Paper elevation={2}>
      <Box padding={2}>
        {main ? mainCard()  : ''}
        {review.review && !main ? reviewCard() : ''}
      </Box>
    </Paper>
    : ''
  )
}
    