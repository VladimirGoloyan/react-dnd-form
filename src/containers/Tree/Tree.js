import React, { useContext } from "react";
import { AppContext } from "context/AppContext";
import ReactDOMServer from "react-dom/server";

import "./Tree.scss";

const Tree = () => {
  const context = useContext(AppContext);

  return (
    <div className="app-tree">
      {context.state.tree !== null ? (
        <div className="app-tree__text">
          {ReactDOMServer.renderToStaticMarkup(
            <div className="app-form">
              {context.state.tree ? (
                <>
                  <div className="app-form__drag-location"></div>
                  <div className="app-form__content">
                    {context.state.tree.map((el, idx) => {
                      return (
                        <div className="app-form__content__child">
                          <div className="app-form__drag-location__sibling"></div>
                          <div className="app-form__content__item">
                            {el.map((el) => {
                              return React.createElement(
                                el.title,
                                el.attributes
                              );
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
                <div className="app-form__drag-location"></div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div> Tree does not exist yet</div>
      )}
    </div>
  );
};

export default Tree;
