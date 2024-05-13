import React, { useState, useEffect } from "react";
import { Typography, Stack, Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Removee from "../../assets/cart_cross_icon.png";
import './listproduct.css'; // Import the CSS file for styling

const Listproduct = () => {
    const [all_product, setAllProductDetails] = useState([]);

    useEffect(() => {
        fetchInfo();
    }, []);

    const fetchInfo = async () => {
        try {
            const response = await fetch('http://localhost:4000/allproduct');
            const data = await response.json();
            setAllProductDetails(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const removeProduct = async (id) => {
        try {
            await fetch('http://localhost:4000/removeproducts', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id }),
            });
            await fetchInfo();
        } catch (error) {
            console.error('Error removing product:', error);
        }
    };

    const columnsWithRemove = [
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            align: "center",
            headerAlign: "center",
            headerClassName: "custom-header",
        },
        {
            field: 'price',
            headerName: 'Price',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'custom-header',
        },
        {
            field: 'category',
            headerName: 'Category',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'custom-header',
        },
        {
            field: 'remove',
            headerName: 'Remove',
            width: 100,
            sortable: false,
            disableColumnMenu: true,
            headerClassName: 'custom-header',

            renderCell: (params) => (
                <img
                    onClick={() => removeProduct(params.row.id)}
                    className="remove-icon"
                    src={Removee}
                    alt=""
                />
            ),
        },
    ];

    return (
        <Stack gap={1.5} mt={1.4} >
            <Box className="list"> {/* Add className here */}
                <Typography color="Black" sx={{
                    fontSize: 50,
                    fontStyle: 'italic',
                }}>ALL PRODUCTS</Typography>
                <DataGrid sx={
                    {width:1000}
                }
                    slots={{
                        oolbar: GridToolbar,
                    }}
                    rows={all_product}
                    columns={columnsWithRemove}
                    style={{ color: 'black' }}
                />
            </Box>
        </Stack>
    );
};

export default Listproduct;
