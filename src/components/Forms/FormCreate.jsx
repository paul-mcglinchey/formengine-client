import { useState } from 'react';
import { Formik, Form, Field } from "formik"
import { TextField, SelectField } from './FormElements';
import formCreationSchema from '../../validationSchema/formCreationSchema';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';
import { DynamicForm } from '.';

export const FormCreate = props => {

  return (
    <div>
      <DynamicForm formSchema={formCreationSchema} />
    </div>
  )
}

export default FormCreate;