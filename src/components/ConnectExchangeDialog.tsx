import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import { ExchangeFormData } from '../types';

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: ExchangeFormData) => void;
  exchangeName: string;
}

export default function ConnectExchangeDialog({
  open,
  onClose,
  onSubmit,
  exchangeName,
}: Props) {
  const [formData, setFormData] = React.useState<ExchangeFormData>({
    apiKey: '',
    apiSecret: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ apiKey: '', apiSecret: '' });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Connect to {exchangeName}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="API Key"
            type="text"
            fullWidth
            value={formData.apiKey}
            onChange={(e) =>
              setFormData({ ...formData, apiKey: e.target.value })
            }
            required
          />
          <TextField
            margin="dense"
            label="API Secret"
            type="password"
            fullWidth
            value={formData.apiSecret}
            onChange={(e) =>
              setFormData({ ...formData, apiSecret: e.target.value })
            }
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Connect
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}