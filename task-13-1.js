async function showUsersData() {
    let getData = url => fetch(url)
        .then(response => response.json());

    let usersList = await getData('https://api.github.com/users?since=250');

    usersList.forEach(
        async user => {
            let userRepos = user.repos_url;
            let repos = await getData(userRepos);

            document.body.appendChild(document.createElement('img'))
                .src = user.avatar_url;

            repos.forEach(
                repo => {
                    document.body.appendChild(document.createElement('p'))
                        .innerText = repo.name
                }
            )
        }
    )
}

showUsersData();