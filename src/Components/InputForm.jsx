import {
  Alert,
  Container,
  IconButton,
  InputAdornment,
  MenuItem,
  Snackbar,
  TextField,
} from "@mui/material";
import { React, useState } from "react";
import { FaCalendarTimes } from "react-icons/fa";
import ButtonTheme from "./ButtonTheme";

const InputForm = () => {
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

  const currentDate = new Date();
  // تنسيق التاريخ بالشكل المطلوب DD/MM/YYYY
  const formattedDate = `${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}/${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${currentDate.getFullYear()}`;
  // دالة لإنشاء قائمة الأوقات من 12:00 PM حتى 12:00 AM بفاصل 30 دقيقة
  const generateTimeOptions = () => {
    const times = [];
    let hour = 12;
    let minute = 0;
    let period = "AM";

    for (let i = 0; i < 48; i++) {
      // 48 فترة لتمثيل 24 ساعة بفواصل 30 دقيقة
      // تنسيق الوقت بالشكل HH:MM AM/PM
      const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")} ${period}`;
      times.push(formattedTime);

      // زيادة الوقت بمقدار 30 دقيقة
      minute += 30;
      if (minute >= 60) {
        minute = 0;
        hour += 1;
      }
      if (hour > 12) {
        hour = 1; // إعادة تعيين الساعة بعد 12 إلى 1
      }
      // تبديل الفترة عند الانتقال من 11:30 AM إلى 12:00 PM أو من 11:30 PM إلى 12:00 AM
      if (hour === 12 && minute === 0) {
        period = period === "AM" ? "PM" : "AM";
      }
    }

    return times;
  };

  const timeOptions = generateTimeOptions();
  return (
    <Container
      className="  bg-white w-full  rounded-2xl shadow-2xl mb-4    "
      maxWidth="md"
    >
      <div className=" sm:px-16 py-20  rounded-xl   ">
        <div className="grid gap-8 mb-8">
          <div className="sm:flex gap-4 ">
            <TextField
              variant="outlined"
              label="DD/MM/YYYY"
              placeholder="DATE"
              fullWidth
              required
              helperText="Entet the Date you want"
              defaultValue={formattedDate}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <FaCalendarTimes />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              label="Time of Date"
              placeholder="TIME"
              fullWidth
              required
              select
              helperText="Enter the time you want"
            >
              {timeOptions.map((time, index) => (
                <MenuItem key={index} value={time}>
                  {time}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="sm:flex grid gap-4">
            <TextField
              variant="outlined"
              label="Enter your name"
              placeholder="NAME"
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
            label="Number of person"
            helperText="TOTAL PERSON"
            required
          />
        </div>
        <ButtonTheme
          variant={"contained"}
          bgcolor={"error"}
          onClick={handleClick}
        >
          Book A Table
        </ButtonTheme>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Table booked successfully!
          </Alert>
        </Snackbar>
      </div>
    </Container>
  );
};

export default InputForm;
