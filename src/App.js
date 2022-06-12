import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Card, Col, ListGroup, Button, Jumbotron } from "react-bootstrap";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      email: "",
      phone: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    document.body.style = "background: #c7b580";
  }

  handleSubmit(form, formikMethods) {
    console.log(form);

    this.setState({
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      password: form.password,
    });
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="mb-2">
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              User Info
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Full Name: {this.state.fullName}
            </ListGroup.Item>
            <ListGroup.Item as="li">Email: {this.state.email}</ListGroup.Item>
            <ListGroup.Item as="li">Phone: {this.state.phone}</ListGroup.Item>
            <ListGroup.Item as="li">
              Password: {this.state.password}
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="bg-white pb-3">
          <div className="jumbotron bg-light text-center">
            <h1>Create An Account</h1>
            <p className="pb-2">
              Create an account to enjoy all the services without any ads for
              free
            </p>
          </div>
          <Formik
            initialValues={{ fullName: "", email: "", phone: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              if (!values.fullName) {
                errors.fullName = "Required";
              }

              if (!values.password) {
                errors.password = "Required";
              }

              if (!values.phone) {
                errors.phone = "Required";
              } else if(
                !/^(\+994\d{2}\d{3}\d{2}\d{2})|(\(\+994\d{2}\)\s\d{3}\-\d{2}\-\d{2})$/i.test(
                  values.phone
                )
              ){
                errors.email = "Invalid phone";
              }
              return errors;
            }}
            onSubmit={this.handleSubmit}
          >
            <Form className="px-3">
              <label className="my-2">FullName</label>
              <Field type="text" className="form-control " name="fullName" />
              <ErrorMessage
                className="text-danger"
                name="fullName"
                component="div"
              />
              <label className="my-2">Email</label>
              <Field type="email" className="form-control " name="email" />
              <ErrorMessage
                className="text-danger"
                name="email"
                component="div"
              />
              <label className="my-2">Phone</label>
              <Field type="text" className="form-control " name="phone" />
              <ErrorMessage
                className="text-danger"
                name="phone"
                component="div"
              />
              <label className="my-2">Password</label>
              <Field type="password" className="form-control" name="password" />
              <ErrorMessage
                className="text-danger"
                name="password"
                component="div"
              />
              <button
                type="submit"
                className="form-control bg-danger text-white mt-4"
                onClick={this.handleSubmit}
              >
                Create Account
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}

export default App;
