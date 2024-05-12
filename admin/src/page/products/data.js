import { Box, IconButton, Tooltip } from "@mui/material";
import "./products.css" 
import { Delete, Edit, Preview } from "@mui/icons-material";
export const productColumns = [
    { field: "id", headerName: "ID",  headerClassName: "custom-header" },
    { field: "name", headerName: "Name", flex: 1, headerClassName: "custom-header" },
    { field: "category", headerName: "Category", flex: 1, headerClassName: "custom-header" },
    { field: "price", headerName: "Price",  headerClassName: "custom-header" },
    { field: "description", headerName: "Description", flex: 1, headerClassName: "custom-header" },
    { field: "totalPrice", headerName: "Total Price", headerClassName: "custom-header" },
    {field: "action",headerName:"Actions",headerClassName:"custom-header"}
  ];
  
  export const productRows = [
    {
      id: 1,
      name: "Foundation",
      category: "Makeup",
      price: "$30",
      description: "High-quality foundation for flawless skin.",
      totalPrice: "$30",
    },
    {
      id: 2,
      name: "Moisturizer",
      category: "Skincare",
      price: "$20",
      description: "Hydrating moisturizer for smooth and supple skin.",
      totalPrice: "$20",
    },
    {
      id: 3,
      name: "Eau de Parfum",
      category: "Perfume",
      price: "$50",
      description: "Exquisite fragrance for a lasting impression.",
      totalPrice: "$50",
    },
    // Add more products with their respective categories
  ];
  