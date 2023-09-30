import React from 'react';
import { Typography, Stack, Container } from '@mui/material';

const Dashboard = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          Happy coding Team! 🚀
        </Typography>
      </Stack>
    </Container>
  );
};

export default Dashboard;
