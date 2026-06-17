import { ErrorMessage, Form, Formik, Field } from 'formik';
import MyTextInput from './myTextInput';
import * as yup from 'yup';
import AppLayout from './layouts/AppLayout';

function App() {

 
  // const formik = useFormik({

  //   validate : (values) => {

  //   },

  // })

  let registerFormSchema = yup.object().shape({
    name : yup.string().required().min(3),
    username : yup.string().required().min(6),
    email : yup.string().required().email(),
    password : yup.string().required().min(8),
    about: yup.string().required(),
    type : yup.string().required().matches(/(admin|normal)/),
    role : yup.boolean().required()
  })

  const submitHandler = (values) => {
    console.log('submit' , values)
  }
  
  return (
    <>
     <AppLayout />
        <Formik
            initialValues={{
              name : '',
              username : '',
              email : '',
              password : '',
              about: '',
              type : 'admin',
              role : false
            }}
            validationSchema={registerFormSchema}
            onSubmit={submitHandler}
        >
          <Form>
            <MyTextInput 
                label="Your name"
                name="name"
                type="text"
                placeholder="please enter your name"
            />

          
            <MyTextInput 
                label="Username"
                name="username"
                type="text"
                placeholder="please enter Username"
            />

            <MyTextInput 
                label="Email Address"
                name="email"
                type="email"
                placeholder="please enter your email address"
            />
         
            <MyTextInput 
                label="Password"
                name="password"
                type="password"
                placeholder="please enter password"
            />

            <div>
              <label>About Me</label>
              <Field name="about" as="textarea" placeholder="please enter a text"/>
              <ErrorMessage name="about" />
            </div>  

            <div>
              <label>User Type</label>
              <Field name="type" as="select">
                  <option value="normal">Normal</option>
                  <option value="admin">Admin</option>
              </Field>
              <ErrorMessage name="type" />
            </div>  



            <div>
              <label>Role</label>
              <Field name="role" type="checkbox" />
              <ErrorMessage name="role" />
            </div>  

            <button type="submit">send</button>
          </Form> 

        </Formik>
    </>
  );

}

export default App;
