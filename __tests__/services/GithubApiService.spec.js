import * as axios from "axios";

import MockAdapter from "axios-mock-adapter";
import { getRepoData, getUserData } from "../../services/GithubApiService";
import { gitHubUrl } from "../../assets/Constants";

const mock = new MockAdapter(axios);
jest.mock("axios");

describe("github API requests", () => {
  test("testing axios get request userdata", () => {
    const search = "devshah-24";
    const data = { name: "Dev Shah" };
    // mock.onGet(gitHubUrl + "/" + search).reply(200, data);

    getUserData("devshah24").then((response) => {
      expect(response).toEqual(data);
    });
  });
  test("testing axios get request repodata", async () => {
    const search = "devshah-24";
    const data = {};
    mock.onGet(gitHubUrl + "/" + search).reply(200, data);
    getRepoData("someurl.com").then((response) => {
      expect(response).toEqual(data);
    });
  });
  test("get repodata", async () => {
    const repoUrl = "https://api.github.com/users/DEVSHAH-24/repos";
  });
  test("response", () => {
    axios.get.mockImplementation((url) => Promise.resolve({ data: "" }));
    getUserData("devshah-24").then((response) => {
      expect(response).toNotEqual(null);
    });
  });
});
