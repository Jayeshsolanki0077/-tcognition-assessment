import React, { useState } from "react";
import { Container, Grid, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { customers } from "./customer-service-mock";

interface IStudent {
  name?: string;
  email?: string;
  address?: string;
  dob?: string;
  teleNumber?: string;
  altTeleNumber?: string;
}

export const Customer: React.FC<IStudent> = () => {
  const [isDisabled, setDisabled] = useState(true);
  const { name, email, address, dob, teleNumber, altTeleNumber }: IStudent =
    customers;

  const formik = useFormik({
    initialValues: {
      name: name,
      dob: dob,
      email: email,
      address: address,
      teleNumber: teleNumber,
      altTeleNumber: altTeleNumber,
    },
    onSubmit: (values) => {
      setDisabled(false);
      if (isDisabled) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    },
  });

  return (
    <Container>
      <Grid container spacing={2} padding={2} border="2px solid black">
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3} padding={5}>
            <Grid item xs={6}>
              <Typography variant="h4" align="left" color={"Black"}>
                Customer details
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" align="right">
                <Button variant="contained" size="large" type="submit">
                  {isDisabled ? "Edit" : "Update"}
                </Button>
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                id="name"
                name="name"
                label="Customer Name"
                disabled={isDisabled}
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="address"
                name="address"
                label="Address"
                multiline
                disabled={isDisabled}
                maxRows={4}
                value={formik.values.address}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="dob"
                name="dob"
                label="Date of Birth"
                disabled={isDisabled}
                value={formik.values.dob}
                onChange={formik.handleChange}
                error={formik.touched.dob && Boolean(formik.errors.dob)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="email"
                name="email"
                label="Email address"
                disabled={isDisabled}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id="teleNumber"
                name="teleNumber"
                disabled={isDisabled}
                label="Telephone Number"
                value={formik.values.teleNumber}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="altTeleNumber"
                name="altTeleNumber"
                disabled={isDisabled}
                label="Alt Telephone Number"
                value={formik.values.altTeleNumber}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};
