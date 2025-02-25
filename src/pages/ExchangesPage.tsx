import React from 'react';
import { Container, Typography, Alert } from '@mui/material';
import ExchangeCard from '../components/ExchangeCard';
import ConnectExchangeDialog from '../components/ConnectExchangeDialog';
import { Exchange, ExchangeFormData } from '../types';

export default function ExchangesPage() {
  const [exchanges, setExchanges] = React.useState<Exchange[]>([
    { id: 'binance', name: 'Binance', connected: false },
    { id: 'coinbase', name: 'Coinbase', connected: false },
    { id: 'kraken', name: 'Kraken', connected: false },
  ]);

  const [connectingExchange, setConnectingExchange] = React.useState<Exchange | null>(null);

  const handleConnect = (id: string) => {
    const exchange = exchanges.find((e) => e.id === id);
    if (exchange) {
      setConnectingExchange(exchange);
    }
  };

  const handleDisconnect = (id: string) => {
    setExchanges(
      exchanges.map((exchange) =>
        exchange.id === id
          ? { ...exchange, connected: false, apiKey: undefined, apiSecret: undefined }
          : exchange
      )
    );
  };

  const handleSubmitConnection = (data: ExchangeFormData) => {
    if (connectingExchange) {
      setExchanges(
        exchanges.map((exchange) =>
          exchange.id === connectingExchange.id
            ? { ...exchange, connected: true, ...data }
            : exchange
        )
      );
      setConnectingExchange(null);
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Exchange Connectors
      </Typography>
      <Alert severity="info" sx={{ mb: 3 }}>
        Connect your crypto exchange accounts to start managing your portfolio
      </Alert>
      {exchanges.map((exchange) => (
        <ExchangeCard
          key={exchange.id}
          exchange={exchange}
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
        />
      ))}
      {connectingExchange && (
        <ConnectExchangeDialog
          open={true}
          onClose={() => setConnectingExchange(null)}
          onSubmit={handleSubmitConnection}
          exchangeName={connectingExchange.name}
        />
      )}
    </Container>
  );
}