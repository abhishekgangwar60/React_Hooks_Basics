import { useState, useEffect } from "react";
import { fetchResources } from "../Services/jsonPlaceHodlerService";

/***
 * Added code reusability
 */
export const fetchResourceHook = selectedResource => {
  const [resources, updateState] = useState([]);

  const fetchData = async () => {
    const response = await fetchResources(selectedResource);
    updateState(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [selectedResource]);

  return resources;
};
