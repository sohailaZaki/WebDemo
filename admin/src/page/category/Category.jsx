import { useEffect, useMemo, useState } from 'react';
import { Alert, Avatar, Box, Button, Snackbar, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { grey } from '@mui/material/colors';
import { useForm } from 'react-hook-form';
import React from 'react';

const Category = () =>  {
 
const {
  register, //enable validation and access to their values.
  handleSubmit, //handle form submission
  watch, //watch the value of one or multiple fields in your form.
  formState: { errors }, //access to the form state, including any validation errors
} = useForm();

const [open, setOpen] = React.useState(false);

const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setOpen(false);
};

const handleClick = () => {
  setOpen(true);
};

const onSubmit = () => {
  //take data but it on db
  console.log("doneeeeeeeeeeee");
  handleClick();
};
return (
<Box>
<Typography color="Black" sx={{
fontSize: 50,
fontStyle: 'italic',
}}>ADD ADMIN</Typography>
<Typography color="bLack" sx={{
fontSize: 20, my: 2
}} >Create a New Admin Profile</Typography>

<Box
onSubmit={handleSubmit(onSubmit)}
component="form"
sx={{
  display: "flex",
  flexDirection: "column",
  gap: 3,
  width: 1100
}}
noValidate
autoComplete="off"
>
{/* //name */}
<Stack sx={{ gap: 2 }} direction={"row"}>
  <TextField
    error={Boolean(errors.firstName)}
    helperText={
      Boolean(errors.firstName)
        ? "This field is required & min 3 character"
        : null
    }
    {...register("firstName", { required: true, minLength: 3 })}
    sx={{ flex: 1 }}
    label="Category Name"
    variant="filled"
  />

 
</Stack>

<TextField
      error={Boolean(errors.lastName)}
      helperText={
        Boolean(errors.lastName)
          ? "This field is required & min 3 character"
          : null
      }
      {...register("id", { required: true, minLength: 3 })}
      sx={{ flex: 1 }}
      label="ID"
      variant="filled"
    />

<TextField label="Description" variant="filled" />

<Box sx={{ textAlign: "right" }}>
  <Button
    type="submit"
    sx={{
      backgroundColor: "#ef9a9a",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: " #e57373", // Change to the color on hover
      },
      "&:active": {
        backgroundColor: "#e57373", // Change to the color on click
      },
      '&:focus': {
        outline: 'none', // Remove the focus ring
      },
    }}
    variant="contained"
  >
    Create New User
  </Button>

  <Snackbar
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    open={open}
    autoHideDuration={3000}
    onClose={handleClose}
  >
    <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
      Category add successfully
    </Alert>
  </Snackbar>
</Box>
</Box>


</Box>

  )
}
export default Category;


