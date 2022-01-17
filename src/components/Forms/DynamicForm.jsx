import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import {
  Form,
  TextField,
  SubmitButton
} from './FormElements';

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

      console.log(formSchema[key].fieldType);
      if (formSchema[key].fieldType === "text") {
        _validationSchema[key] = Yup.string();
      } else if (formSchema[key].fieldType === "integer") {
        _validationSchema[key] = Yup.number().typeError("Value must be a number").integer("Value must be an integer");
      }

      if (formSchema[key].required) {
        console.log(_validationSchema);
        _validationSchema[key] = _validationSchema[key].required('Required');
      }
    }

    setFormData(_formData);
    setValidationSchema(Yup.object().shape({ ..._validationSchema }));
  }

  const getFormElement = (elementName, elementSchema) => {
    const props = {
      name: elementName,
      label: elementSchema.fieldLabel,
      options: elementSchema.options
    };

    if (elementSchema.fieldType === "text" || elementSchema.fieldType === "integer") {
      return <TextField {...props} />
    }
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