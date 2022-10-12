import * as React from "react";
import TestRenderer from "react-test-renderer";
import UserInfoCard from "../../components/UserInfoCard";

const getComponent = (props = {}) => <UserInfoCard {...props} />;

describe("UserInfoCard", () => {
  test("Snapshot", () => {
    const component = getComponent();

    const testRenderer = TestRenderer.create(component);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  test("Snapshot with Data", () => {
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

    const testRenderer = TestRenderer.create(component);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  test("Snapshot with some data", () => {
    const component = getComponent({
      userData: {
        login: "debajitdeb11",
        id: 11337871,
        node_id: "MDQ6VXNlcjExMzM3ODcx",
        avatar_url: null,
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
        name: null,
        company: "OnSolve",
        blog: "",
        location: null,
        email: null,
        hireable: false,
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

    const testRenderer = TestRenderer.create(component);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
