import React from 'react';
import { Box, Stack } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { categoriesColumns, categoriesRows, productsColumns, productsRows } from './data'; // Importing productsColumns and productsRows

const Row4 = () => {
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
