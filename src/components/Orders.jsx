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

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState({ product: '', client: '', quantity: '' });
  const [editingOrder, setEditingOrder] = useState(null);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const addOrder = () => {
    if (editingOrder === null) {
      setOrders([...orders, { id: Date.now(), ...order }]);
    } else {
      setOrders(orders.map(o => o.id === editingOrder.id ? { ...o, ...order } : o));
      setEditingOrder(null);
    }
    setOrder({ product: '', client: '', quantity: '' });
  };

  const editOrder = (ord) => {
    setEditingOrder(ord);
    setOrder(ord);
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(o => o.id !== id));
  };

  return (
    <div>
      <h2>Cadastro de Pedidos</h2>
      <TextField
        label="Produto"
        name="product"
        color='success'
        value={order.product}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Cliente"
        name="client"
        color='success'
        value={order.client}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Quantidade"
        name="quantity"
        color='success'
        value={order.quantity}
        onChange={handleChange}
        margin="normal"
        type="number"
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button variant="contained" color="success" onClick={addOrder}>
        {editingOrder ? 'Atualizar Pedido' : 'Adicionar Pedido'}
      </Button>
      </div>

      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Produto</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Quantidade</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((ord) => (
              <TableRow key={ord.id}>
                <TableCell>{ord.product}</TableCell>
                <TableCell>{ord.client}</TableCell>
                <TableCell>{ord.quantity}</TableCell>
                <TableCell>
                  <Button color="secondary" onClick={() => editOrder(ord)}>Editar</Button>
                  <Button color="error" onClick={() => deleteOrder(ord.id)}>Deletar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
