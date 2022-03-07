// ./src/components/utils/forms/Form.js

// EXTERNAL PACKAGE IMPORTS
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// CONTEXT IMPORT
import FormsContext from "../../../context/Form/FormsContext";
import CreateLocationForm from "./CreateLocationForm";

// INTERNAL COMPONENTS IMPORTS

export default function Form(props) {

  const crudOption = props.option;
  // console.log(crudOption)

  const model = props.model;
  // console.log(model)

  const formOption = crudOption + "-" + props.model;
  // console.log(formOption)

  switch (formOption) {
    case "create-location":
      return (
        <>
          <CreateLocationForm />
        </>
      );
      break;
      default:
  }

  // return (
  //   <form action="" method="post">
  //   <button type="submit">Submit</button>
  //   </form>
  // )
}
