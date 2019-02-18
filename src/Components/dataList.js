import React from "react";
import { fetchResourceHook } from "../hooks/fetchResourceHook";

const DataList = props => {
  const resources = fetchResourceHook(props.selectedResource);

  return (
    <div className="ui container" style={{ textAlign: "left" }}>
      <ul>
        {resources.map(record => {
          return <li key={record.id}>{record.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default DataList;
