import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Snackbar, Stack, Typography, colors } from "@mui/material";
import { useForm } from "react-hook-form";



const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Merchant",
    label: "Merchant",
  },

];

const Form = () => {
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
      }} >Create a New merchant Profile</Typography>

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
            label="First Name"
            variant="filled"
          />

          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName)
                ? "This field is required & min 3 character"
                : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Stack>

        {/* email */}
        <TextField
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email) ? "Please provide a valid email address" : null
          }
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        />
        {/* phone number */}
        <TextField
          error={Boolean(errors.ContactNumber)}
          helperText={
            Boolean(errors.ContactNumber)
              ? "Please provide a valid Phone number"
              : null
          }
          {...register("ContactNumber", { required: true, pattern: phoneRegExp })}
          label="Contact Number"
          variant="filled"
        />

        <TextField label="Adress 1" variant="filled" />
        <TextField label="Adress 2" variant="filled" />

        <TextField
          variant="filled"
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

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
              Account created successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>


    </Box>



  );
};

export default Form;
