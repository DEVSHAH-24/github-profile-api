import * as React from "react";
import TestRenderer from "react-test-renderer";
import PublicRepos from "../../components/PublicRepos";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

Enzyme.configure({ adapter: new Adapter() });

const getComponent = (props = {}) => shallow(<PublicRepos {...props} />);
const mockedDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockedDispatch,
}));

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});
describe("PublicRepos", () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
  });
  test("Snapshot 1", async () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });

  test("Snapshot 2", async () => {
    const component = getComponent({
      userData: {
        login: "debajitdeb11",
        id: 11337871,
        node_id: "MDQ6VXNlcjExMzM3ODcx",
        avatar_url: "https://avatars.githubusercontent.com/u/11337871?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/debajitdeb11",
        html_url: "https://github.com/debajitdeb11",
        followers_url: "https://api.github.com/users/debajitdeb11/followers",
        following_url:
          "https://api.github.com/users/debajitdeb11/following{/other_user}",
        gists_url: "https://api.github.com/users/debajitdeb11/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/debajitdeb11/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/debajitdeb11/subscriptions",
        organizations_url: "https://api.github.com/users/debajitdeb11/orgs",
        repos_url: "https://api.github.com/users/debajitdeb11/repos",
        events_url:
          "https://api.github.com/users/debajitdeb11/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/debajitdeb11/received_events",
        type: "User",
        site_admin: false,
        name: "DEBAJIT DEB",
        company: "OnSolve",
        blog: "",
        location: "India",
        email: null,
        hireable: true,
        bio: '"you\'re gonna die unknown, do something about it"',
        twitter_username: null,
        public_repos: 43,
        public_gists: 4,
        followers: 6,
        following: 17,
        created_at: "2015-03-05T19:08:24Z",
        updated_at: "2022-09-15T17:40:12Z",
      },
    });

    await expect(component).toMatchSnapshot();
  });
});
