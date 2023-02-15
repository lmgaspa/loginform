import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { GoogleLoginButton, FacebookLoginButton } from 'react-social-login-buttons';

function App() {

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });


  return (
    <section style={{display: 'flex', justifyContent: 'center', marginTop: 120}}>
      <div className="App">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <h1>Login</h1>
              <p style={{ textAlign: 'left', marginLeft: 50 }}>Email</p>
              <Field type="email" name="email" />
              <div class='error'>
                <ErrorMessage name="email" />
              </div>
              <p style={{ textAlign: 'left', marginLeft: 50 }}>Password</p>
              <Field type="password" name="password" />
              <div class='error'>
                <ErrorMessage name="password" />
              </div>
              <p style={{ textAlign: 'right', marginRight: 45, fontSize: 14 }}>Forgot your password?</p>

              <button type="submit" disabled={isSubmitting}>
                LOGIN
              </button>

              <p style={{ fontSize: 14 }}>Don't have an account? <a href="#">Sign up</a></p>
            </Form>


          )}
        </Formik>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ marginBottom: 20 }}>Or Sign Up Using</p>
          <GoogleLoginButton style={{ width: '80%', borderRadius: '20px' }} />
          <FacebookLoginButton style={{ width: '80%', borderRadius: '20px' }} />
        </div>
      </div>
    </section>
  );
}

export default App;