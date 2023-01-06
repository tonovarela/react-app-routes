
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json'
import { Form, Formik } from 'formik';
import * as yup from 'yup';


const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value
  if (!input.validations) continue;
  let schema =  yup.string();
  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema =schema.required("Este campo es requerido");
    }
    if (rule.type ==='minLength') {
      schema =schema.min( (rule.value as any), `Minimo de ${rule.value} requerido` );
    }
    if (rule.type ==='email') {
      schema =schema.email(`Este campo debe de ser email`);
    }
    


  }
  requiredFields[input.name] = schema;
}

export const DynamicFormPage = () => {
  const validationSchema =yup.object({...requiredFields})
  return (
    <>
      <Formik initialValues={initialValues}  validationSchema={validationSchema}  onSubmit={(values) => { console.log(values) }}>
        {(formik) => (
          <Form>
            {
              formJson.map(({type,placeholder,name,label,options}) => {
                if (type === "input" || type === "password" || type === "email") {
                  return <MyTextInput key={name}
                    type={(type as any)}
                    placeholder={placeholder}
                    name={name} label={label}
                  />
                }
                if (type === "select" || type === "multiselect") {
                  return <MySelect name={name} label={label} key={name} >
                    <option value="0">Seleccione una opción</option>
                    {options?.map((option) => {
                      return <option key={option.id} value={option.id}>{option.label}</option>
                    })}
                  </MySelect>
                }

              }
              )
            }

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </>
  )
}
