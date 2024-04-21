import React, { useState } from 'react';
import { TextField, Button, InputAdornment } from '@mui/material';

import { Event } from '@mui/icons-material';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StyledFormBox } from './ModalForm.styled';

const ModalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: null,
    comment: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = date => {
    setFormData(prevFormData => ({
      ...prevFormData,
      bookingDate: date,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Тут буде логіка  відправки форми
    console.log('Form data:', formData);

    setFormData({
      name: '',
      email: '',
      bookingDate: null,
      comment: '',
    });
  };

  return (
    <StyledFormBox>
      <h4>Book your campervan now</h4>
      <p>Stay connected! We are always ready to help you.</p>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          wrapperProps={{ style: { display: 'flex', width: '100%' } }}
        >
          <DatePicker
            name="bookingDate"
            label="Booking date"
            value={formData.bookingDate}
            onChange={handleDateChange}
            fullWidth
            margin="normal"
            inputVariant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Event />
                </InputAdornment>
              ),
            }}
          />
        </LocalizationProvider>
        <TextField
          name="comment"
          label="Comment"
          value={formData.comment}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </StyledFormBox>
  );
};

export default ModalForm;
