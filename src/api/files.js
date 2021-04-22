import { client } from "./client";

const files = {
  getFiles: (token, data) =>
    client.post(`/files/get?access_token=${token}`, data),
};

export default files;
