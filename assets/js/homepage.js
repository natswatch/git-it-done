

// search for user's list of repositories
var getUserRepos = function(user) {
    //format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    //make the request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        }); 
    });
};

getUserRepos("microsoft");
getUserRepos("facebook");
getUserRepos("natswatch");
