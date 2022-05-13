import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../Components/Card';
import BasicModal from '../Components/Modal';
import { read, update } from '../Api';

const Details = ({ isDesktop }) => {
  // hooks
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const { id } = useParams();

  // initial call
  const callApi = useCallback(async () => {
    const response = await read(id);
    setSelectedItem(response);
  }, [id]);

  useEffect(() => {
    callApi();
  }, [callApi]);

  const handleModal = () => {
    setOpen(!open);
  };

  const onAdd = async (text) => {
    const obj = { review: text };
    const payload = { ...selectedItem, ...obj };
    const response = await update(id, payload);
    setSelectedItem(response);
    setOpen(!open);
  };

  return (
    <div>
      <Card main handleModal={handleModal} review={selectedItem} />
      <div style={{ marginTop: '40px' }} />
      {selectedItem.review
        ? <Card handleModal={handleModal} review={selectedItem} />
        : '' }
      <BasicModal
        open={open}
        setOpen={setOpen}
        selectedItem={selectedItem}
        isDesktop={isDesktop}
        onAdd={onAdd}
      />
    </div>
  );
};

export default Details;

Details.propTypes = {
  isDesktop: PropTypes.bool.isRequired
};
