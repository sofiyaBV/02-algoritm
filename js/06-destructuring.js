// function showProfileInfo(userProfile) {
//   const { name, tag, location, avatar, ...restProps } = userProfile;
//   console.log(name, tag, location, avatar, restProps);
// }

const profile = {
  name: "Pueblo",
  tag: "qwer",
  location: "Amsterdam",
  avatar: "https://",
  stats: {
    folowers: 5670,
    views: 49038,
    likes: 4392,
  },
  changeTag(newTag) {
    this.tag = newTag;
  },
};
// showProfileInfo(profile);

// const { name, tag, ...restProps } = profile;
// console.log(restProps);

//marcup-------------
profile.changeTag("newTag");
function makeProfileMarcup(userProfile) {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { folowers, views, likes },
  } = userProfile;
  return `<img src="${avatar}">
            <p>${name}<span>@${tag}</span></p>
            <p>location : ${location}</p>
            <ul>
                <li>Followers: ${folowers}</li>
                <li>Views: ${views}</li>
                <li>Likes: ${likes}</li>
            </ul>`;
}

const marcup = makeProfileMarcup(profile);
console.log(marcup);
document.body.insertAdjacentHTML("afterbegin", marcup);
