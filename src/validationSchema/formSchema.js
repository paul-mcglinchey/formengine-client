const formSchema = {
  sections: [
    {
      name: "Demographics",
      fields: {
        name: {
          type: "text",
          label: "Name",
          required: true
        },
        age: {
          type: "integer",
          label: "Age",
          required: true
        }
      }
    },
    {
      name: "Records",
      fields: {
        outcome: {
          type: "text",
          label: "Outcome",
          required: true
        }
      }
    }
  ]
}

export default formSchema;