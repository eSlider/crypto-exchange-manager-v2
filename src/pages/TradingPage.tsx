import React from 'react';
import { Container, Typography, Paper, Grid, Box } from '@mui/material';
import { LineChart, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

export default function TradingPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Trading Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <Box sx={{ color: 'success.main', mb: 2 }}>
              <ArrowUpCircle size={48} />
            </Box>
            <Typography variant="h6" gutterBottom>
              Total Profit
            </Typography>
            <Typography variant="h4" color="success.main">
              +$12,458.32
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <Box sx={{ color: 'primary.main', mb: 2 }}>
              <LineChart size={48} />
            </Box>
            <Typography variant="h6" gutterBottom>
              Active Trades
            </Typography>
            <Typography variant="h4">
              8
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
            <Box sx={{ color: 'error.main', mb: 2 }}>
              <ArrowDownCircle size={48} />
            </Box>
            <Typography variant="h6" gutterBottom>
              Total Loss
            </Typography>
            <Typography variant="h4" color="error.main">
              -$3,271.45
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3, mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Trading Activity
            </Typography>
            <Typography color="text.secondary">
              Connect to exchanges to view your trading activity
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}