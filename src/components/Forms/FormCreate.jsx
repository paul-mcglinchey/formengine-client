import { useState } from "react";

const FormCreate = props => {

  const [formData, setFormData] = useState({
    formName: "",
    sections: [{
      sectionName: "",
      fields: {
        fieldName: "",
        fieldType: "",
        fieldLabel: "",
        required: false
      }
    }]
  })

  return (
    <div>
      <div className="flex">
        <span className="text-lg font-semibold">Create a form</span>
      </div>
      <div>

      </div>
    </div>
  )
}

export default FormCreate;