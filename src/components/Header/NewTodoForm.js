import React from "react";
import {Formik,Field,Form} from "formik";
import validationSchema from "./validation/validations";
import {useTodo} from "../../context/TodoContext";

function NewTodoForm() {
    const {addTodo} = useTodo();
    return(

        <Formik
            initialValues={{
                text: "",

            }}
            onSubmit={async (values,bag) => {
                console.log(values);
                addTodo(values.text);
                bag.resetForm();
            }}
            validationSchema ={validationSchema }
        >
<Form>

          <Field className="new-todo" placeholder="What needs to be done?" autoFocus
          id="text" name="text"
          />
</Form>
      </Formik>
    )
}
export  default NewTodoForm;