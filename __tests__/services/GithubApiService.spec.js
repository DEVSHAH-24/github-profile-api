import axios from "axios";

import MockAdapter from "axios-mock-adapter";
import { getRepoData, getUserData } from "../../services/GithubApiService";
import { gitHubUrl } from "../../assets/Constants";

const mock = new MockAdapter(axios);

describe("github API requests", () => {
  test("testing axios get request", async () => {
    const search = "devshah-24";
    mock.onGet(gitHubUrl + "/" + search).reply(200, { name: "Dev Shah" });
  });
  test("get repodata", async () => {
    const repoUrl = "https://api.github.com/users/DEVSHAH-24/repos";
  });
});
