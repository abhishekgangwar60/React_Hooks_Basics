import React, { useState } from "react";
import DataList from "./dataList";

export const ThemeSelector = () => {
  const [selectedResource, selectResource] = useState("posts");

  const onButtonClick = text => {
    selectResource(text);
  };

  return (
    <div>
      <h3>Select one of following</h3>
      <div>
        <button
          className="ui button primary"
          onClick={() => onButtonClick("todos")}
        >
          todos
        </button>
        <button
          className="ui button primary"
          onClick={() => onButtonClick("posts")}
        >
          posts
        </button>
      </div>
      <DataList selectedResource={selectedResource} />
    </div>
  );
};

export default ThemeSelector;
