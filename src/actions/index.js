export const FETCH_RESOURCE = "[react hooks] fetch respurce";

export function fetchResource(payload) {
  return {
    type: FETCH_RESOURCE,
    payload
  };
}
