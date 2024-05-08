export const orderStatusData = [
  {
    id: "delivered",
    label: "Delivered",
    value: 40,
    color: "hsl(111, 90%, 90%)",
  },
  {
    id: "processing",
    label: "Processing",
    value: 30,
    color: "hsl(22, 90%, 90%)",
  },
  {
    id: "pending",
    label: "Pending",
    value: 20,
    color: "hsl(240, 90%, 90%)",
  },
];


export const data2 = [
  { id: "category1", label: "Category 1", value: 100 },
  { id: "category2", label: "Category 2", value: 200 },
  { id: "category3", label: "Category 3", value: 300 },
  // Additional data points for other categories or segments
];

//number of new clients added over a certain time period,
export const data3 = [
  { id: "january", label: "January", value: 100 },
  { id: "february", label: "February", value: 150 },
  { id: "march", label: "March", value: 200 },
  // Additional data points for other months or segments
];





export const Transactions = [
  {
    txId: "TX001",
    user: "John Doe",
    date: "2024-05-01",
    cost: 150.00,
  },
  {
    txId: "TX002",
    user: "Jane Smith",
    date: "2024-05-02",
    cost: 200.00,
  },
  {
    txId: "TX003",
    user: "Alice Johnson",
    date: "2024-05-03",
    cost: 75.00,
  },
  {
    txId: "01e4dsaewf",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.91",
  },
  {
    txId: "0315dsaaef",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsaef",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szvfew",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.49",
  },
];
export const productsColumns = [
  { field: "id", headerName: "ID",  headerClassName: "custom-header" },
  { field: "name", headerName: "Name", flex: 1, headerClassName: "custom-header" },
  { field: "category", headerName: "Category", flex: 1, headerClassName: "custom-header" },
  { field: "price", headerName: "Price",  headerClassName: "custom-header" },
  { field: "description", headerName: "Description", flex: 1, headerClassName: "custom-header" },
  { field: "totalPrice", headerName: "Total Price", flex :1, headerClassName: "custom-header" },
];


export const productsRows = [
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
export const categoriesColumns = [
  { field: "id", headerName: "ID", headerClassName: "custom-header" },
  { field: "name", headerName: "Name", flex: 1, headerClassName: "custom-header" },
  { field: "description", headerName: "Description", flex: 1, headerClassName: "custom-header" },
];

export const categoriesRows = [
  {
    id: 1,
    name: "Make-up", // Category 1
    description: "Description for Category 1",
  },
  {
    id: 2,
    name: "Category 2", // Category 2
    description: "Description for Product 2",
  },
  {
    id: 3,
    name: "Category 3", // Category 3
    description: "Description for Product 3",
  },
];
