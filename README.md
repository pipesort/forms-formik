# Create forms using Formik


## installation

```bash
clone this repo 
cd formik
yarn develop
```
***

## Using React based forms - Formik

- `initialValues`
    - `initialValues` are like states in formik, `initialValues` must be refereced to inputs as id or name.
- `props`
    - `props` contains the event handling functions in formik, we can pass it as props properties, e.g:- handleChange.
- `handleChange` 
    - `handleChange` is the event handler function in formik. This function handle's the values, while changing the values in input fields.
- `handleSubmit`
    - `handleSubmit` is used to handle the submit action in formik.
- `values`
    - `values` are refers to the perticular field value in initialValues.

***
## Reducing boilerplate

- `Form`
   - `Form` is used to handle onSubmit event in Formik.

- `Field`
   - Form inputs can replace with `Field` in Formik. Name or Id must be match with initial values in `Field`.

- `setFieldValue`
   - Instead of using `handleChange` you could use `setFielValue` in cases where you want to explicitly set the particular field value. `setFieldValue` can be used in form element like this:

   - It also can be used out of form elements and in custom components like `react-rating` (in setting the ratings field based on what user clicked) or `Google-maps` (in setting the co-ordinates of the location the user clicked)

***

## Form validation
- `Yup`
   - `yup` is used to validate form fields.

```bash
npm i yup (or) yarn add yup
```

- `ErrorMessage`
   - `ErrorMessage` is used to simplify error message in Formik.
   - `ErrorMessage` need Name or Id for the error Field, We can set a component as div or span. 

***
## Gotcha
- Always convert single line values to lowercase.
- Use `Disabled` option to the submit button during submission to avoid multiple clicks.


## Ref:
  - https://jaredpalmer.com/formik/docs/overview
  - https://github.com/jquense/yup

## Watch how we make : 
  - https://www.youtube.com/watch?v=wIaP-1GvrXg

## For more: 
  - https://www.pipesort.com