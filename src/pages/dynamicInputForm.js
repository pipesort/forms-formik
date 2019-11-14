import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';



export default function () {
  return (
    <div>
      <Formik
        initialValues={{ friends: [] }}
        onSubmit={values => alert(JSON.stringify(values))}
        render={({ values }) => (
          <Form>
            <FieldArray
              name="friends"
              render={arrayHelpers => (
                <div>
                  {values.friends && values.friends.length > 0 ? (
                    values.friends.map((friend, index) => (
                      <div key={index}>
                        <Field name={`friends.${index}`} />
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => arrayHelpers.remove(index)}
                          startIcon={<DeleteIcon />}
                        >
                          Remove
                    </Button>
                      </div>

                    ))
                  ) : null}
                  <br />

                  <div>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      onClick={() => arrayHelpers.push("")}
                      startIcon={<AddIcon />}
                    >
                      ADD
                </Button>
                    <br /><br />
                    <Button
                      type='submit'
                      variant="outlined"
                      color="primary"
                    >
                      submit
                      </Button>
                  </div>

                </div>
              )}
            />
          </Form>
        )}
      />
    </div>
  )
};

