import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns } from "./data";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    try {
      fetch("http://localhost:4000/orders/check", {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch orders');
        }
      })
      .then(data => {
        // Add unique id to each row
        const invoicesWithIds = data.map((invoice, index) => ({
          ...invoice,
          id: index + 1, // Use index as id (you can replace this with a unique id from your data)
          totalProducts: invoice.myArray.reduce((total, product) => total + product.count, 0),
          products: invoice.myArray.map(product => `${product.count} x Product ${product.IdOfProduct}`).join(', ')
        }));
        setInvoices(invoicesWithIds);
      })
      .catch(error => {
        console.error("Error fetching orders:", error);
      });
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Map the data to match the column fields
  const rowData = invoices.map(invoice => ({
    id: invoice.id, // Ensure each row has a unique id
    _id: invoice._id,
    firstName: invoice.firstName,
    email: invoice.email,
    phoneNumber: invoice.phoneNumber,
    address: invoice.address,
    governorate: invoice.governorate,
    location: invoice.location,
    TotalPrice: invoice.TotalPrice,
    totalProducts: invoice.totalProducts,
    products: invoice.products,
  }));

  // Add the products column to the columns array
  const updatedColumns = [...columns, { field: "products", headerName: "Products", headerClassName: "custom-header" }];

  return (
    <Box>
      <Typography color="Black" sx={{ fontSize: 50, fontStyle:'italic' }}>ORDERS</Typography>
      <Typography color="Black" sx={{ fontSize: 20, my: 2 }}>List of Invoices for Future Reference</Typography>
      <Box sx={{ height: "89%", width: 1370, mx: "auto" }}>
        <DataGrid
          checkboxSelection
          rows={rowData}
          columns={updatedColumns}
          style={{ color: 'black' }}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
