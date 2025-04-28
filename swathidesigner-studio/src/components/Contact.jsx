import { Box, TextField, Button, Typography, Snackbar } from "@mui/material";
import '../styles/Contact.css';
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+91-"); 
  const [customization, setCustomization] = useState("");
  const [errors, setErrors] = useState({});       // { name?: string, phone?: string, customization?: string }
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const validate = () => {
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedCustomization = customization.trim();
    const newErrors = {};

    if (!trimmedName) {
      newErrors.name = "Name is required";
    }

    if (!trimmedPhone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+91-\d{10}$/.test(trimmedPhone)) {
      newErrors.phone = "Must be in format +91-xxxxxxxxxx";
    }

    if (!trimmedCustomization) {
      newErrors.customization = "Please describe your customization";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;  // stop here if any field has an error

    try {
      const response = await fetch('http://localhost:5000/submitForm', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          customization: customization.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSnackbarMsg("Form submitted successfully");
        setName(""); 
        setPhone("+91-");
        setCustomization("");
        setErrors({});
      } else {
        setSnackbarMsg(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setSnackbarMsg("Error submitting form");
    }

    setOpenSnackbar(true);
  };

  return (
    <div className="contact-container">
      <Typography variant="h4" className="contact-heading">Contact us</Typography>

      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        required
        value={name}
        onChange={e => setName(e.target.value)}
        error={Boolean(errors.name)}
        helperText={errors.name || ""}
      />

      <TextField
        label="Phone Number"
        variant="outlined"
        fullWidth
        required
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="+91-xxxxxxxxxx"
        error={Boolean(errors.phone)}
        helperText={errors.phone || ""}
      />

      <TextField
        label="What would you like to customize?"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        required
        value={customization}
        onChange={e => setCustomization(e.target.value)}
        error={Boolean(errors.customization)}
        helperText={errors.customization || ""}
      />

      <Button
        variant="contained"
        className="contact-submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMsg}
      />
    </div>
  );
}

export default Contact;
