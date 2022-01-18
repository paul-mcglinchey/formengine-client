import { TextField, TitleField, SelectField, GroupField, SubTitleField } from "../../components/Forms/FormElements";

const getFormElement = (elementName, elementSchema) => {
  const props = {
    name: elementName,
    label: elementSchema.fieldLabel,
    options: elementSchema.options,
    fields: elementSchema.fields
  };

  if (elementSchema.fieldType === "title") {
    return (
      <TitleField {...props} />
    )
  // TODO: add subtitle and sub groups
  } else if (elementSchema.fieldType === "text" || elementSchema.fieldType === "integer") {
    return (
      <TextField {...props} />
    )
  } else if (elementSchema.fieldType === "object") {
    return (
      <div className="flex flex-1 space-x-2">
        {Object.keys(elementSchema.fields).map((key, i) => (
          <div key={i}>
            {getFormElement(key, elementSchema.fields[key])}
          </div>
        ))}
      </div>
    )
  } else if (elementSchema.fieldType === "select") {
    return (
      <SelectField {...props} />
    )
  }
  // TODO: Add checkbox
}

export default getFormElement;