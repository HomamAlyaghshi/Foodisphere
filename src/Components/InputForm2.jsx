import {
  Alert,
  Container,

  Snackbar,
  TextField,
} from "@mui/material";
import { React, useState } from "react";
import ButtonTheme from "./ButtonTheme";

const InputForm2 = () => {
  const [open, setOpen] = useState(false);

  // دالة لفتح التنبيه
  const handleClick = () => {
    setOpen(true);
  };

  // دالة لإغلاق التنبيه
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };


  return (
    <Container
      className="    rounded-2xl shadow-2xl mb-4    "
      maxWidth="md"
    >
      <div className=" sm:px-16 py-20  rounded-xl   ">
        <div className="grid gap-8 mb-8">
          <div className="flex gap-4">
            <TextField
              variant="outlined"
              label="Enter your full name"
              placeholder="Full Name"
              fullWidth
              required
            />
            <TextField
              variant="outlined"
              label="x-xxx-xxx-xxxx"
              placeholder="PHONE"
              type="tel"
              fullWidth
              required
            />
          </div>
          <TextField
            variant="outlined"
            fullWidth
            label="Email"
            helperText="username@gmail.com"
            required
          />
        </div>
        <TextField
        variant="outlined"
        fullWidth
        label="Message"
        helperText="Enter The message"
        required
        multiline
        rows={8}
         />

 
        <ButtonTheme
          variant={"contained"}
          bgcolor={"error"}
          onClick={handleClick}
        >
          send
        </ButtonTheme>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            The Massege sent successfully!
          </Alert>
        </Snackbar>
      </div>
    </Container>
  );
};

export default InputForm2;
