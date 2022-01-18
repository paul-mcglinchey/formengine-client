const formCreationSchema = {
  formName: {
    fieldName: "formName",
    fieldType: "title",
    fieldLabel: "Form name"
  },
  formContent: {
    fieldType: "object",
    fields: {
      fieldName: {
        fieldName: "fieldName",
        fieldType: "text",
        fieldLabel: "Field name",
        required: true
      },
      fieldType: {
        fieldName: "fieldType",
        fieldType: "select",
        fieldLabel: "Field type",
        required: false,
        options: [
          { label: "text", value: "text" },
          { label: "integer", value: "integer" }
        ]
      },
      fieldLabel: {
        fieldName: "fieldLabel",
        fieldType: "text",
        fieldLabel: "Field label",
        required: true
      },
      required: {
        fieldName: "required",
        fieldType: "checkbox",
        fieldLabel: "Required",
        required: false
      }
    }
  }
}

export default formCreationSchema;