import React from 'react';
import { Container, Tabs, Tab, Box } from '@mui/material';
import Products from './components/Products.jsx';
import Clients from './components/Clients.jsx';
import Orders from './components/Orders.jsx';
import { green } from '@mui/material/colors';

function App() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container>
      <Tabs value={tabValue} onChange={handleChange} centered>
        <Tab  label="Produtos"  />
        <Tab  label="Clientes" />
        <Tab  label="Pedidos" />
      </Tabs>

      <Box sx={{ paddingTop: 2 }}>
        {tabValue === 0 && <Products />}
        {tabValue === 1 && <Clients />}
        {tabValue === 2 && <Orders />}
      </Box>
    </Container>
  );
}

export default App;
