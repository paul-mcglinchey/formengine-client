import { Field } from "formik";

const FormInput = ({ htmlFor, title, value, type, name, id }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-left text-xs font-bold text-gray-600 tracking-wide uppercase" htmlFor={htmlFor}>{title}</label>
      <Field className="border-2 border-gray-300 rounded p-1" type={type} name={name} />
    </div>
  )
}

export default FormInput;