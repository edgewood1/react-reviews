import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import { TextareaAutosize } from '@mui/material';

const Wrapper = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 20px;
`;
const IconStyle = {
  position: 'absolute',
  left: '90%',
  top: '5%'
};

/**
 * BasicModal displays controllers
 */
const BasicModal = ({
  onAdd, open, setOpen, selectedItem, isDesktop
}) => {
  const [text, setText] = useState('');
  const input = useRef();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    width: isDesktop ? '300px' : '80%'
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton style={IconStyle} onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
          <Typography sx={{ mt: 1 }}>
            <strong>Review: </strong>
          </Typography>
          <TextareaAutosize
            style={{ marginTop: '10px' }}
            maxRows={4}
            ref={input}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            defaultValue={selectedItem.review}
            onChange={handleTextChange}
          />
          <Wrapper>
            <Button onClick={() => onAdd(text)}> Save </Button>
          </Wrapper>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
BasicModal.propTypes = {
  onAdd: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  selectedItem: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    place: PropTypes.string,
    published_at: PropTypes.string,
    rating: PropTypes.number,
    content: PropTypes.string,
    review: PropTypes.string,
  })
};
