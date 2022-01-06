import api from ".";

export const apiDelete = (endPointTarget: string, id: string) => {
  api.delete(endPointTarget);
};

export const apiGet = (endPointTarget: string, id: string) => {
  api.get(endPointTarget);
};

export const apiPut = (endPointTarget: string, id: string) => {
  api.put(endPointTarget);
};

export const apiPost = (endPointTarget: string, id: string) => {
  api.post(endPointTarget);
};
