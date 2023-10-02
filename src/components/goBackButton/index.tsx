import React from 'react';
import { useNavigate } from 'react-router-dom'; // For React Router v6
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function GoBackButton() {
  const navigate = useNavigate(); // For React Router v6

  const handleGoBack = () => {
    navigate(-1); // For React Router v6
  };

  return (
    <IconButton onClick={handleGoBack}>
      <ArrowBackIcon />
    </IconButton>
  );
}

export default GoBackButton;
