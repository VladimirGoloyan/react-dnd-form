import React, { useContext } from "react";
import { AppContext } from "context/AppContext";

import "./Form.scss";

const Form = () => {
  const context = useContext(AppContext);

  const elementCreator = (title, attributes) => {
    if (title !== "button" || title !== "input" || title !== "textarea") {
      switch (title) {
        case "select":
          return React.createElement(
            "select",
            {},
            React.createElement("option", { value: "A" }, "Option A"),
            React.createElement("option", { value: "B" }, "Option B"),
            React.createElement("option", { value: "C" }, "Option C")
          );
        case "radio":
          return React.createElement(
            "div",
            {},
            React.createElement("input", { type: "radio" }),
            React.createElement("label", {}, "Radio")
          );
        case "checkbox":
          return React.createElement(
            "div",
            {},
            React.createElement("input", { type: "checkbox" }),
            React.createElement("label", {}, "Checkbox")
          );
        default:
          console.log("Somehow entered default case");
      }
    }

    return React.createElement(title, attributes);
  };

  const addElement = (dir, rowIdx) => {
    if (context.state.activeElement) {
      switch (dir) {
        case "first":
          context.dispatch({
            type: "ADD_FIRST",
            payload: { element: context.state.activeElement },
          });
          break;
        case "up":
          context.dispatch({
            type: "ADD_TOP",
            payload: { element: context.state.activeElement },
          });
          break;
        case "down":
          context.dispatch({
            type: "ADD_BOTTOM",
            payload: { element: context.state.activeElement },
          });
          break;
        case "left":
          context.dispatch({
            type: "ADD_LEFT",
            payload: { element: context.state.activeElement, id: rowIdx },
          });
          break;
        case "right":
          context.dispatch({
            type: "ADD_RIGHT",
            payload: { element: context.state.activeElement, id: rowIdx },
          });
          break;

        default:
          console.log("Somehow entered default case");
      }
    }
  };

  const resetActiveElement = () => {
    context.dispatch({ type: "RESET_ELEMENT" });
  };

  return (
    <div className="app-form" onMouseUp={() => resetActiveElement()}>
      {context.state.tree ? (
        <>
          {context.state.tree.length < 4 && (
            <div
              className="app-form__drag-location"
              onMouseUp={() => addElement("up")}
            ></div>
          )}
          <div className="app-form__content">
            {context.state.tree.map((el, idx) => {
              return (
                <div className="app-form__content__child">
                  {el.length < 3 && (
                    <div
                      className="app-form__drag-location__sibling"
                      onMouseUp={() => addElement("left", idx)}
                    ></div>
                  )}
                  <div className="app-form__content__item">
                    {el.map((el) => {
                      return elementCreator(el.title, el.attributes);
                    })}
                  </div>
                  {el.length < 3 && (
                    <div
                      className="app-form__drag-location__sibling"
                      onMouseUp={() => addElement("right", idx)}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
          {context.state.tree.length < 4 && (
            <div
              className="app-form__drag-location"
              onMouseUp={() => addElement("down")}
            ></div>
          )}
        </>
      ) : (
        <div
          className="app-form__drag-location"
          onMouseUp={() => addElement("first")}
        ></div>
      )}
    </div>
  );
};

export default Form;
