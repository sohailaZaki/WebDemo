
// import React, { useState } from 'react'
// import "./data";

// import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// import { Alert, Box, Button, IconButton, Link, MenuItem, Snackbar, Stack, TextField, Typography } from "@mui/material";

// import { productColumns, productRows } from './data';

// import { grey } from '@mui/material/colors';

// import { useForm } from 'react-hook-form';
// import { AddCircleOutline, DeleteOutline, ListAlt } from '@mui/icons-material';


// const Products = () => {
 
  
//   return (
//     <div className='topbar'>
//    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
//    <Link to={'/NewProduct'} style={{textDecoration:"none"}} >
//         <div className='item'>
//             <IconButton color="primary">
//                 <AddCircleOutline sx={{ fontSize: 30 }} />
//             </IconButton>
//             <p>Add Product</p>
//         </div>
//     </Link>

    

//     {/* <Link to={'/listproduct'} style={{textDecoration:"none"}} >
//         <div className='item'>
//             <IconButton color="primary">
//                 <ListAlt sx={{ fontSize: 30 }} />
//             </IconButton>
//             <p>List of Products</p>
//         </div>
//     </Link> */}
//    </Stack>
   

   
// </div>
//   );
// };
// export default Products;

import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';

const Products = () => {
    return (
        <div className='topbar'>
            <div style={{ textDecoration: 'none' }}>
                <Link to={'/NewProduct'} style={{ textDecoration: 'none' }}>
                    <div className='item'>
                        <IconButton color="primary">
                            <AddCircleOutline sx={{ fontSize: 30 }} />
                        </IconButton>
                        <p>Add Product</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Products;
