import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import {
  Form,
  SubmitButton,
} from './FormElements';
import { getFormElement } from '../../utilities';

const DynamicForm = props => {

  const { formSchema } = props;

  const [formData, setFormData] = useState({});
  const [validationSchema, setValidationSchema] = useState({});

  useEffect(() => {
    initForm(formSchema);
  }, []);

  const initForm = (formSchema) => {
    let _formData = {};
    let _validationSchema = {};

    for (var key of Object.keys(formSchema)) {
      _formData[key] = "";

      if (formSchema[key].fieldType === "text") {
        _validationSchema[key] = Yup.string();
      } else if (formSchema[key].fieldType === "integer") {
        _validationSchema[key] = Yup.number().typeError("Value must be a number").integer("Value must be an integer");
      }
      //TODO: Check for an object type and cycle through the keys recursively

      if (formSchema[key].required) {
        _validationSchema[key] = _validationSchema[key].required('Required');
      }
    }

    setFormData(_formData);
    setValidationSchema(Yup.object().shape({ ..._validationSchema }));
  }

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
  }

  return (
    <div>
      <Form
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={formData}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col space-y-2">
          {Object.keys(formSchema).map((key, i) => (
            <div key={i}>
              {getFormElement(key, formSchema[key])}
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <SubmitButton title="Validate" />
        </div>
      </Form>
    </div>
  )
}

export default DynamicForm;