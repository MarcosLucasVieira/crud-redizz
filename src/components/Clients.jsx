import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper 
} from '@mui/material';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState({ name: '', email: '' });
  const [editingClient, setEditingClient] = useState(null);

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const addClient = () => {
    if (editingClient === null) {
      setClients([...clients, { id: Date.now(), ...client }]);
    } else {
      setClients(clients.map(c => c.id === editingClient.id ? client : c));
      setEditingClient(null);
    }
    setClient({ name: '', email: '' });
  };

  const editClient = (cli) => {
    setEditingClient(cli);
    setClient(cli);
  };

  const deleteClient = (id) => {
    setClients(clients.filter(c => c.id !== id));
  };

  return (
    <div>
      <h2>Clientes</h2>
      <TextField
        label="Nome"
        name="name"
        color='success'
        value={client.name}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        color='success'
        value={client.email}
        onChange={handleChange}
        margin="normal"
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button  variant="contained" color="success" onClick={addClient}>
        {editingClient ? 'Atualizar Cliente' : 'Adicionar Cliente'}
      </Button>
      </div>
      
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((cli) => (
              <TableRow key={cli.id}>
                <TableCell>{cli.name}</TableCell>
                <TableCell>{cli.email}</TableCell>
                <TableCell>
                  <Button color="secondary" onClick={() => editClient(cli)}>Editar</Button>
                  <Button color="error" onClick={() => deleteClient(cli.id)}>Deletar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Clients;