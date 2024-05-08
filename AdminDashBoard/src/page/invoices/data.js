import'./invoices.css'
export const columns = [
    { field: "id",
     headerName: "ID", 
     width: 33,
     headerClassName: "custom-header", },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      headerClassName: "custom-header",

    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      headerClassName: "custom-header",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerClassName: "custom-header",
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      headerClassName: "custom-header",
      
    },
    {
      field: "date",
      headerName: "Date",
      headerClassName: "custom-header",
    },
  ];
  
  export const rows = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      phone: "(665)121-5454",
      cost:"$"+ 50,
      date: "2024-05-07", 
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      phone: "(421)314-2288",
      cost:"$"+ 100,
      date: "2024-05-08", 
    },
  
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      phone: "(422)982-6739",
      cost:"$"+ 80,
      date: "2024-05-09", 
    },
    {
      id: 4,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      cost: "$"+1000,
      date: "2024-09-09",
    },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      phone: "(421)445-1189",
      cost: "$"+80,
      date: "2024-05-09",
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      phone: "(232)545-6483",
      cost:"$"+ 800,
      date: "2023-05-09",
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      phone: "(543)124-0123",
      address: "22215 Super Street, Everting, ZO 515234",
      cost: "$"+1050,
      date: "2024-12-19",
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      phone: "(222)444-5555",
      cost: "$"+880,
      date: "2023-05-09",
    },
    {
      id: 9,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      phone: "(444)555-6239",
      cost: "$"+80,
      date: "2024-09-09",
    },
    {
      id: 10,
      name: "Enteri Redack",
      email: "enteriredack@gmail.com",
      phone: "(222)444-5555",
      address: "4123 Easer Blvd, Wentington, AD 142213",
      cost: "$"+810,
      date: "2024-07-09",
    },
    {
      id: 11,
      name: "Steve Goodman",
      email: "stevegoodmane@gmail.com",
      phone: "(444)555-6239",
      cost:"$"+ 809,
      date: "2024-01-09",
    },
  ];
  
  