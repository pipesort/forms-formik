import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { RadioGroup, FormLabel, Radio, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import { Formik, Form, FieldArray, Field } from 'formik';



const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function () {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Formik
          initialValues={{
            firstName: '', lastName: '', email: '', password: '',
            terms: false, gender: '', country: '', friends: []
          }}
          onSubmit={(vals) => alert(JSON.stringify(vals))}
        >
          {props => (
            <Form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    value={props.values.firstName}
                    onChange={props.handleChange}
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    value={props.values.lastName}
                    onChange={props.handleChange}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    value={props.values.email}
                    onChange={props.handleChange}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    value={props.values.password}
                    onChange={props.handleChange}
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormLabel > country </FormLabel>
                  <Select
                    fullWidth
                    value={props.values.country}
                    onChange={props.handleChange}
                    inputProps={{
                      name: 'country',
                      id: 'country',
                    }}
                  >
                    <option value="" />
                    <option value='India'>India</option>
                    <option value='USA'>USA</option>
                    <option value='UK'>UK</option>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup aria-label="gender" name="customized-radios">
                    <FormControlLabel
                      control={<Radio
                        onChange={props.handleChange}
                        value="male"
                        name="gender"
                      />}
                      label="Male"
                    />
                    <FormControlLabel
                      control={<Radio
                        onChange={props.handleChange}
                        value="female"
                        name="gender"
                      />}
                      label="Female"
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox name='terms' id='terms'
                      value={props.values.terms}
                      onChange={(e) => props.setFieldValue('terms', e.target.checked)} color="primary" />}
                    label="Terms & conditions"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
          </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}