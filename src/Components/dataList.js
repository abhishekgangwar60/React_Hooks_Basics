import React from "react";
import { fetchResourceHook } from "../hooks/fetchResourceHook";

const DataList = props => {
  const resources = fetchResourceHook(props.selectedResource);

  /***
   * We Don't  need this code because Hooks seperated the logic out of component .. wohoooo
   */

  // const [resources, setResources] = useState([]);

  // const fetchData = async () => {
  //   const response = await fetchResources(props.selectedResource);
  //   setResources(response.data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [props.selectedResource]);

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
