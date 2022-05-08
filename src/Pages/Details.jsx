import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from '../Components/Card';
import BasicModal from '../Components/Modal';
import Api from '../Api';


const Details = ({isDesktop}) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [modalReview, setModalReview] = useState('');
  const navigate = useNavigate();
  const {id} = useParams(); 

  const navToList = useCallback(() => {
    navigate('/list');
  }, [navigate])

  const apiCall = useCallback(async(body, method) => {
    const response = await Api(body, method);
    if (Object.keys(response).length < 1 || response.length < 1) navToList();
    setSelectedItem(response);
  }, [navToList])

  useEffect(()=> {
    apiCall(id);
  }, [apiCall, id])

  const onModal = () => {
    setOpen(!open);
  }

  const onAdd = () => {
    const obj = {...selectedItem};
    obj.review = modalReview;
    apiCall(obj, 'PUT');
    setOpen(!open);
  }

  const modalObj = {
    open, setOpen, setModalReview, modalReview, selectedItem, isDesktop, onAdd
  }

  return (
    <div>
      <Card navToList={navToList} onModal={onModal} review={selectedItem} />
      <div style={{marginTop: '40px'}}></div>
      {selectedItem.review ? 
        <Card response onModal={onModal} review={selectedItem} />
        : ''
      }
      <BasicModal {...modalObj}  />  
    </div>
  )
}

export default Details;