import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { categoriesColumns,  productsColumns } from './data'; // Importing productsColumns and productsRows
import axios from 'axios';

const Row4 = () => {
  const [productsRows, setProductsRows] = useState([]);
  const [categoriesRows, setCategoriesRows] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      const productsWithIds = response.data.map((product, index) => ({ ...product, id: index + 1 }));
      setProductsRows(productsWithIds);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      const categoriesWithIds = response.data.map((category, index) => ({ ...category, id: index + 1 }));
      setCategoriesRows(categoriesWithIds);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <Stack gap={1.5} direction="row" mt={1.4}>
      <Box sx={{ height: '89%', width: 600, mx: 'auto' }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={productsRows} // Using productsRows as rows data
          columns={productsColumns} // Using productsColumns as columns data
          style={{ color: 'black' }}
        />
      </Box>
      <Box sx={{ height: '89%', width: 600, mx: 'auto' }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={categoriesRows} // Using productsRows as rows data
          columns={categoriesColumns} // Using productsColumns as columns data
          style={{ color: 'black' }}
        />
      </Box>
    </Stack>
  );
};

export default Row4;
