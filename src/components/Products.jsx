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

const Products = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ name: '', price: '' });
  const [editingProduct, setEditingProduct] = useState(null);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    if (editingProduct === null) {
      setProducts([...products, { id: Date.now(), ...product }]);
    } else {
      setProducts(products.map(p => p.id === editingProduct.id ? product : p));
      setEditingProduct(null);
    }
    setProduct({ name: '', price: '' });
  };

  const editProduct = (prod) => {
    setEditingProduct(prod);
    setProduct(prod);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <h2>Produtos</h2>
      <TextField
        label="Nome"
        name="name"
        color='success'
        value={product.name}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Preço"
        name="price"
        color='success'
        value={product.price}
        onChange={handleChange}
        margin="normal"
      />
       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button variant="contained" color="success" onClick={addProduct}>
        {editingProduct ? 'Atualizar Produto' : 'Adicionar Produto'}
      </Button>
      </div>

      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((prod) => (
              <TableRow key={prod.id}>
                <TableCell>{prod.name}</TableCell>
                <TableCell>{prod.price}</TableCell>
                <TableCell>
                  <Button color="secondary" onClick={() => editProduct(prod)}>Editar</Button>
                  <Button color="error" onClick={() => deleteProduct(prod.id)}>Deletar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;