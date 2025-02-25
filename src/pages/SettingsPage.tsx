import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Switch,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

export default function SettingsPage() {
  const [settings, setSettings] = React.useState({
    notifications: true,
    darkMode: false,
    currency: 'USD',
  });

  const handleChange = (setting: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [setting]: event.target.checked });
  };

  const handleCurrencyChange = (event: any) => {
    setSettings({ ...settings, currency: event.target.value });
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>

      <Paper sx={{ mt: 3 }}>
        <List>
          <ListItem>
            <ListItemText
              primary="Push Notifications"
              secondary="Get notified about important trading events"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.notifications}
                onChange={handleChange('notifications')}
              />
            </ListItemSecondaryAction>
          </ListItem>
          
          <Divider />
          
          <ListItem>
            <ListItemText
              primary="Dark Mode"
              secondary="Toggle dark theme"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.darkMode}
                onChange={handleChange('darkMode')}
              />
            </ListItemSecondaryAction>
          </ListItem>
          
          <Divider />
          
          <ListItem>
            <ListItemText
              primary="Display Currency"
              secondary="Choose your preferred currency"
            />
            <ListItemSecondaryAction>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={settings.currency}
                  onChange={handleCurrencyChange}
                  label="Currency"
                >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                  <MenuItem value="GBP">GBP</MenuItem>
                  <MenuItem value="JPY">JPY</MenuItem>
                </Select>
              </FormControl>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}