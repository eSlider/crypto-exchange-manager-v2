import React from 'react';
import { Container } from '@mui/material';

export default function IframePage() {
  return (
    <Container maxWidth={false} disableGutters sx={{ height: 'calc(100vh - 64px)' }}>
      <iframe
        src="https://example.com"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title="External Content"
      />
    </Container>
  );
}