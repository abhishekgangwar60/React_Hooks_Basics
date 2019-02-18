import React, { useEffect, useState } from "react";
import { fetchResources } from "../Services/jsonPlaceHodlerService";

const DataList = props => {
  const [resources, updateState] = useState([]);
  const { selectedResource } = props;

  const fetchData = async () => {
    const response = await fetchResources(selectedResource);
    updateState(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [selectedResource]);

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
