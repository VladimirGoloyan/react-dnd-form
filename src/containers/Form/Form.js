import React, { useContext } from "react";
import { AppContext } from "context/AppContext";

import "./Form.scss";

const Form = () => {
  const context = useContext(AppContext);

  const addElement = (dir) => {
    if (dir === "up") {
      context.dispatch({
        type: "ADD_FIRST",
        payload: { element: context.state.activeElement },
      });
    }
  };

  const resetActiveElement = () => {
    context.dispatch({ type: "RESET_ELEMENT" });
  };

  return (
    <div className="app-form" onMouseUp={() => resetActiveElement()}>
      {context.state.tree ? (
        <>
          <div
            className="app-form__drag-location"
            onMouseUp={() => addElement("up")}
          ></div>
          <div className="app-form__content">
            {context.state.tree.map((el, idx) => {
              return (
                <div className="app-form__content__child">
                  <div className="app-form__drag-location__sibling"></div>
                  <div className="app-form__content__item">
                    {el.map((el) => {
                      return React.createElement(el.title, el.attributes);
                    })}
                  </div>
                  <div className="app-form__drag-location__sibling"></div>
                </div>
              );
            })}
          </div>
          <div className="app-form__drag-location"></div>
        </>
      ) : (
        <div
          className="app-form__drag-location"
          onMouseUp={() => addElement("up")}
        ></div>
      )}
    </div>
  );
};

export default Form;
