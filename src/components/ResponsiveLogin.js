import React from "react";
import "../App.scss";
import { Button } from "@progress/kendo-react-buttons";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
function ResponsiveLogin() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div className="image">
        <img
          src="https://i.pinimg.com/originals/32/30/4d/32304d147128b2409c3e2a88ae4a8e63.png"
          alt="Login"
          style={{
            position: "absolute",
            width: "50%",
            height: "100%",
          }}
        ></img>
        <style>
          {`
              @media only screen and (max-width:700px){
                .forms{
                  position:absolute;                                                      
                  width:100%;
                  height:100%;
                  } 
                .image{display:none;}   
                                                            
              }`}
        </style>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="forms">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: "5%",
            }}
          >
            <img
              src="https://www.freelogovectors.net/wp-content/uploads/2020/09/sundaram-finance-logo.png"
              alt="LOGO"
              style={{ width: "70%" }}
            />
          </div>
          <br />
          <br />

          <Form
            render={(formRenderProps) => (
              <FormElement
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: " center",
                }}
              >
                <div className="form">
                  <h1>Login</h1>
                  <p>
                    Please put your login credentials below to start using the
                    app
                  </p>
                </div>
                <fieldset className={"k-form-fieldset"}>
                  <div className="mb-3">
                    <Field
                      name={"salesID"}
                      component={Input}
                      label={"Sales ID"}
                    />
                  </div>
                  <div className="mb-3">
                    <Field name={"pwd"} component={Input} label={"Password"} />
                  </div>
                </fieldset>
                <br />
                <Button
                  type={"submit"}
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                  style={{ width: "100%" }}
                >
                  Login
                </Button>
              </FormElement>
            )}
          />
        </div>
      </div>
    </div>
  );
}
export default ResponsiveLogin;
