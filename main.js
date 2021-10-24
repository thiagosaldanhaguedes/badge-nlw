const LinksSocialMedia = {
  github: 'thiagosaldanhaguedes',
  instagram: 'tsaldanhag',
  youtube: 'UCmgcNNoZ0sZR3gBy43nq3dg',
  twitter: 'thiagosaldanhaguedes',
  facebook: 'thiagosaldanhaguedes'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(
      data => (
        (userName.textContent = data.name),
        (userBio.textContent = data.bio),
        (userImage.src = data.avatar_url),
        (userLoginGitHub.textContent = data.login)
      )
    )
}

getGitHubProfileInfos()
