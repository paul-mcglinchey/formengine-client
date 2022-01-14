import { useState } from 'react';
import { Formik, Form } from 'formik';
import FormInput from './components/FormInput';
import SubmitButton from './components/SubmitButton';
import validate from './fetches/validate';

const App = () => {

  const [res, setRes] = useState();

  return (
    <div className="App flex flex-col">
      <div className="flex justify-between border-b-2 border-green-500 mb-6 px-4 py-1 items-center">
        <h1 className="text-4xl font-bold tracking-wide">Validator</h1>
        <div className="bg-gray-200 px-2 rounded">
          <span className="font-semibold tracking-wide text-lg">
            {res && res.data && Array.isArray(res.data) ? res.data.length : 0} validation issues
          </span>
        </div>
      </div>
      <Formik
        initialValues={{ name: '', age: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setRes(() => validate(process.env.REACT_APP_VALIDATOR_API_URL, values))
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          isSubmitting
        }) => (
          <Form className="flex flex-col w-1/4 space-y-2 self-center">
            <FormInput htmlFor="name" type="text" name="name" title="Name" />
            <FormInput htmlFor="age" type="text" name="age" title="Age" />
            <SubmitButton title="Validate" disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
