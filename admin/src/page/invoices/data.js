import'./invoices.css'
// export const columns = [
//     { field: "id",
//      headerName: "ID", 
//      width: 33,
//      headerClassName: "custom-header", },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//       headerClassName: "custom-header",

//     },
//     {
//       field: "phone",
//       headerName: "Phone Number",
//       flex: 1,
//       headerClassName: "custom-header",
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//       headerClassName: "custom-header",
//     },
//     {
//       field: "cost",
//       headerName: "Cost",
//       flex: 1,
//       headerClassName: "custom-header",
      
//     },
//     {
//       field: "date",
//       headerName: "Date",
//       headerClassName: "custom-header",
//     },
//   ];
  
export const columns = [
  { field: "id", headerName: "Order ID",  headerClassName: "custom-header",},
  { field: "customerName", headerName: "Customer Name", flex:1,  headerClassName: "custom-header",},
  { field: "orderDate", headerName: "Order Date", headerClassName: "custom-header",},
  { field: "status", headerName: "Status", headerClassName: "custom-header",},
  { field: "paid", headerName: "Paid", headerClassName: "custom-header", },
  { field: "productName", headerName: "Product Name(s)", flex: 1 , headerClassName: "custom-header",},
  { field: "quantity", headerName: "Quantity",  headerClassName: "custom-header",},
  { field: "unitPrice", headerName: "Unit Price", headerClassName: "custom-header", },
  { field: "totalPrice", headerName: "Total Price",  headerClassName: "custom-header", },
  { field: "shippingFee", headerName: "Shipping Fee",  headerClassName: "custom-header",},
  { field: "tax", headerName: "Tax" , headerClassName: "custom-header",},
  { field: "totalAmount", headerName: "Total Amount", headerClassName: "custom-header",},
];
  
  // export const rows = [
  //   {
  //     id: 1,
  //     customerName: "Jon Snow",
  //     orderDate: "2024-05-07",
  //     status: "Delivered",
  //     paid: true,
  //     productName: "Sword",
  //     quantity: 1,
  //     unitPrice: "$50",
  //     totalPrice: "$50",
  //     shippingFee: "$5",
  //     tax: "$2.5",
  //     totalAmount: "$57.5",
  //   },
  //   {
  //     id: 2,
  //     customerName: "Cersei Lannister",
  //     orderDate: "2024-05-08",
  //     status: "Processing",
  //     paid: false,
  //     productName: "Crown",
  //     quantity: 1,
  //     unitPrice: "$100",
  //     totalPrice: "$100",
  //     shippingFee: "$10",
  //     tax: "$5",
  //     totalAmount: "$115",
  //   },
  //   {
  //     id: 3,
  //     customerName: "Daenerys Targaryen",
  //     orderDate: "2024-05-09",
  //     status: "Processing",
  //     paid: true,
  //     productName: "Dragon Eggs",
  //     quantity: 3,
  //     unitPrice: "$30",
  //     totalPrice: "$90",
  //     shippingFee: "$7",
  //     tax: "$4",
  //     totalAmount: "$101",
  //   }
  //   // {
  //   //   id: 4,
  //   //   name: "Anya Stark",
  //   //   email: "anyastark@gmail.com",
  //   //   phone: "(921)425-6742",
  //   //   cost: "$"+1000,
  //   //   date: "2024-09-09",
  //   // },
  //   // {
  //   //   id: 5,
  //   //   name: "Daenerys Targaryen",
  //   //   email: "daenerystargaryen@gmail.com",
  //   //   phone: "(421)445-1189",
  //   //   cost: "$"+80,
  //   //   date: "2024-05-09",
  //   // },
  //   // {
  //   //   id: 6,
  //   //   name: "Ever Melisandre",
  //   //   email: "evermelisandre@gmail.com",
  //   //   phone: "(232)545-6483",
  //   //   cost:"$"+ 800,
  //   //   date: "2023-05-09",
  //   // },
  //   // {
  //   //   id: 7,
  //   //   name: "Ferrara Clifford",
  //   //   email: "ferraraclifford@gmail.com",
  //   //   phone: "(543)124-0123",
  //   //   address: "22215 Super Street, Everting, ZO 515234",
  //   //   cost: "$"+1050,
  //   //   date: "2024-12-19",
  //   // },
  //   // {
  //   //   id: 8,
  //   //   name: "Rossini Frances",
  //   //   email: "rossinifrances@gmail.com",
  //   //   phone: "(222)444-5555",
  //   //   cost: "$"+880,
  //   //   date: "2023-05-09",
  //   // },
  //   // {
  //   //   id: 9,
  //   //   name: "Harvey Roxie",
  //   //   email: "harveyroxie@gmail.com",
  //   //   phone: "(444)555-6239",
  //   //   cost: "$"+80,
  //   //   date: "2024-09-09",
  //   // },
  //   // {
  //   //   id: 10,
  //   //   name: "Enteri Redack",
  //   //   email: "enteriredack@gmail.com",
  //   //   phone: "(222)444-5555",
  //   //   address: "4123 Easer Blvd, Wentington, AD 142213",
  //   //   cost: "$"+810,
  //   //   date: "2024-07-09",
  //   // },
  //   // {
  //   //   id: 11,
  //   //   name: "Steve Goodman",
  //   //   email: "stevegoodmane@gmail.com",
  //   //   phone: "(444)555-6239",
  //   //   cost:"$"+ 809,
  //   //   date: "2024-01-09",
  //   // },
  // ];
  
  