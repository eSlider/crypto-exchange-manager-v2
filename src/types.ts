export interface Exchange {
  id: string;
  name: string;
  connected: boolean;
  apiKey?: string;
  apiSecret?: string;
}

export interface ExchangeFormData {
  apiKey: string;
  apiSecret: string;
}