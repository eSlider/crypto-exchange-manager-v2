import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
} from '@mui/material';
import { Exchange } from '../types';

interface Props {
  exchange: Exchange;
  onConnect: (id: string) => void;
  onDisconnect: (id: string) => void;
}

export default function ExchangeCard({ exchange, onConnect, onDisconnect }: Props) {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {exchange.name}
        </Typography>
        <Chip
          label={exchange.connected ? 'Connected' : 'Disconnected'}
          color={exchange.connected ? 'success' : 'default'}
          sx={{ mb: 2 }}
        />
      </CardContent>
      <CardActions>
        {exchange.connected ? (
          <Button
            size="small"
            color="error"
            onClick={() => onDisconnect(exchange.id)}
          >
            Disconnect
          </Button>
        ) : (
          <Button
            size="small"
            color="primary"
            onClick={() => onConnect(exchange.id)}
          >
            Connect
          </Button>
        )}
      </CardActions>
    </Card>
  );
}