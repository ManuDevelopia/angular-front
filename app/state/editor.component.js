(function(){
  'use strict';

  angular.module('myFirstApp')
    .component('stateEditor', {
      templateUrl: 'app/state/view/editor.html',
      controller: StateEditor,
      controllerAs: 'editor',
      bindings: {
        state: '<',
        metrics: '<'
     }
    });

  StateEditor.$inject = ['$http', '$stateParams', '$location', 'ProjectService', 'StateService', 'MetricService'];
  function StateEditor($http, $stateParams, $location, ProjectService, StateService, MetricService) {
    var vm = this;
    var id = $stateParams.id;

    if ( id !== undefined &&
         id.length > 0){
      StateService.getItemById(id)
        .then(function(state){
          vm.metrics = parseJson(githubJson);
          vm.state = state;
        })
        .catch(function(err){
          console.log(err);
        });
    }

    vm.create = function () {
      if (vm.state.name) {
        StateService.addItem(vm.state)
          .then(function(res){
            if ($stateParams.project_id !== null){
              ProjectService.getItemById($stateParams.project_id)
                .then(function (project) {
                  project.states.push(res);
                  ProjectService.updateItem(project);
                })
            };

            $location.path('/state/list');
          })
          .catch(function(err){
            console.log(err);
          });
       }
    };

    vm.update = function() {
      if (vm.state.name) {
        StateService.updateItem(vm.state)
          .then(function(ok){
            console.log(ok);
            $location.path('/state/list');
          })
          .catch(function(err){
            console.log(err);
          });
       }
    };

    vm.delete = function(){
      StateService.deleteItem(vm.state)
        .then(function(ok){
            console.log(ok);
            $location.path('/state/list');
          })
          .catch(function(err){
            console.log(err);
          });
    };

    vm.getMetrics = function(){
      $http.get(vm.state.endpoint)
        .then(function (res) {
          vm.state.rawdata = res.data;
        })
        .catch(function (err) {
          console.log(err);
          vm.metrics = prepareMockRawData(rawdata);
        });
    };

    vm.addMetric = function(metric){
      MetricService.addItem(metric)
        .then(function (res) {
          vm.state.metrics.push(res);
        })
    };

    vm.removeMetric = function (metric) {
      vm.state.metrics.shift(metric);
    }
  }

// mockdata remove!!!
var rawdata = {
    created_at: "2016-08-29T16:18:32Z",
    url: null,
    commit_message:"UQ-393 improve error handling",
    branch: "UQ-393",
    committer_name: "Sebastian Scholze",
    committer_email: "scholze@atb-bremen.de",
    commit_sha: "6af3138ba7cf5c7dd3ae07775b67bc13ccc5beb4",
    repo_name: "U-QASAR/u-qasar.platform",
    badge_url: "https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_6.svg",
    coverage_change: 0.0,
    covered_percent: 5.77854987656579
  };

  function prepareMockRawData(rawdata){
    var data = [];

    for (var raw of Object.keys(rawdata)){
     data.push({
      name: raw,
      value: rawdata[raw]
     });
    }
    return data;
  }

  function parseJson(rawJsonObject){
    var data = [];
    var propertyPath = '';

    function parse(rawJson){
      for (var item of Object.keys(rawJson)){
        if (rawJson[item] === null ||
            rawJson[item] === undefined){
          continue;
        }

        if(typeof rawJson[item] === 'object'){
          propertyPath += item + '.';
          parse(rawJson[item]);
          propertyPath = '';
        } else {
          data.push({
            name: item,
            value: rawJson[item],
            path: propertyPath + item
          });
        }
      }
    };

    parse(rawJsonObject);

    return data;
  }


var githubJson =
  {
    "id": 46209990,
    "name": "u-qasar.platform",
    "full_name": "ManuDevelopia/u-qasar.platform",
    "owner": {
      "login": "ManuDevelopia",
      "id": 43015,
      "avatar_url": "https://avatars.githubusercontent.com/u/43015?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ManuDevelopia",
      "html_url": "https://github.com/ManuDevelopia",
      "followers_url": "https://api.github.com/users/ManuDevelopia/followers",
      "following_url": "https://api.github.com/users/ManuDevelopia/following{/other_user}",
      "gists_url": "https://api.github.com/users/ManuDevelopia/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ManuDevelopia/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ManuDevelopia/subscriptions",
      "organizations_url": "https://api.github.com/users/ManuDevelopia/orgs",
      "repos_url": "https://api.github.com/users/ManuDevelopia/repos",
      "events_url": "https://api.github.com/users/ManuDevelopia/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ManuDevelopia/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/ManuDevelopia/u-qasar.platform",
    "description": "The U-Qasar platform",
    "fork": true,
    "url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform",
    "forks_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/forks",
    "keys_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/teams",
    "hooks_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/hooks",
    "issue_events_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/issues/events{/number}",
    "events_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/events",
    "assignees_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/assignees{/user}",
    "branches_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/branches{/branch}",
    "tags_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/tags",
    "blobs_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/languages",
    "stargazers_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/stargazers",
    "contributors_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/contributors",
    "subscribers_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/subscribers",
    "subscription_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/subscription",
    "commits_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/contents/{+path}",
    "compare_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/merges",
    "archive_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/downloads",
    "issues_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/issues{/number}",
    "pulls_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/labels{/name}",
    "releases_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/releases{/id}",
    "deployments_url": "https://api.github.com/repos/ManuDevelopia/u-qasar.platform/deployments",
    "created_at": "2015-11-15T08:20:54Z",
    "updated_at": "2016-02-04T16:18:10Z",
    "pushed_at": "2016-09-18T08:10:57Z",
    "git_url": "git://github.com/ManuDevelopia/u-qasar.platform.git",
    "ssh_url": "git@github.com:ManuDevelopia/u-qasar.platform.git",
    "clone_url": "https://github.com/ManuDevelopia/u-qasar.platform.git",
    "svn_url": "https://github.com/ManuDevelopia/u-qasar.platform",
    "homepage": "http://www.uqasar.eu",
    "size": 2751,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Java",
    "component_has":{
      "has_issues": false,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "open_issues_count": 0,
      "forks": 0,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "master"
    }
  };

})();
