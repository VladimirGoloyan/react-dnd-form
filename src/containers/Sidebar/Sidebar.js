import React, { useContext } from "react";
import { AppContext } from "context/AppContext";

import "./Sidebar.scss";

const Sidebar = () => {
  const elements = [
    {
      title: "button",
      attributes: { disabled: false, value: "Button", children: "Click me" },
    },
    {
      title: "input",
      attributes: { value: "", maxlength: 10, placeholder: "type here" },
    },
    {
      title: "textarea",
      attributes: ["disabled", "maxlength", "placeholder"],
    },
    // {
    //   title: "select",
    //   attributes: ["disabled","size"],
    // },
    // {
    //   title: "radio",
    //   attributes: ["disabled", "value"],
    // },
    // {
    //   title: "checkbox",
    //   attributes: ["disabled", "value"],
    // },
  ];

  const context = useContext(AppContext);

  const setDraggingElement = (element) => {
    context.dispatch({ type: "SET_ELEMENT", payload: { element } });
    console.log(context.state);
  };

  return (
    <div className="app-sidebar">
      {elements.map((el, idx) => {
        return (
          <div
            className="app-sidebar__item"
            key={idx}
            onMouseDown={() => setDraggingElement(el)}
          >
            {el.title}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
