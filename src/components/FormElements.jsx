import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  useFormikContext
} from 'formik';

export const Form = props => {
  return (
    <Formik {...props}>
      <FormikForm className="needs-validation" noValidate="">
        {props.children}
      </FormikForm>
    </Formik>
  )
}

export const TextField = props => {
  const { name, label, placeholder, ...rest } = props;
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-xs text-gray-600 uppercase tracking-wider font-bold" htmlFor={name}>{label}</label>
      )}
      <Field
        className="border border-gray-500 rounded-sm px-2 py-1 font-semibold text-gray-500"
        type="text"
        name={name}
        id={name}
        placeholder={placeholder || ""}
        {...rest}
      />
      <ErrorMessage
        name={name}
        render={msg => <div className="text-red-400 text-sm font-bold uppercase">{msg}</div>}
      />
    </div>
  )
}

export const SelectField = props => {
  const { name, label, options } = props;
  return (
    <>
      {label && <label for={name}>{label}</label>}
      <Field
        as="select"
        id={name}
        name={name}
      >
        <option value="" >Choose...</option>
        {options.map((o, i) => (
          <option key={i} value={o.value} label={o.label || o.value} />
        ))}
      </Field>
      <ErrorMessage
        name={name}
        render={msg => <div className="text-red-500" >{msg}</div>}
      />
    </>
  )
}

export const SubmitButton = props => {
  const { title, ...rest } = props;
  const { isSubmitting } = useFormikContext();

  return (
    <button className="font-semibold tracking-wide px-2 border border-gray-600 rounded hover:bg-gray-600 transition-all hover:text-white" type="submit" {...rest} disabled={isSubmitting}>{title}</button>
  )
}