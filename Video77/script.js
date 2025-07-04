function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // Finish this function
  let viewStr;
  if (views < 1000) {
    viewStr = views;
  } else if (views >= 1000000000000000) {
    viewStr = views / 1000000000000000 + "Q";
  } else if (views >= 1000000000000) {
    viewStr = views / 1000000000000 + "T";
  } else if (views >= 1000000000) {
    viewStr = views / 1000000000 + "B";
  } else if (views >= 1000000) {
    viewStr = views / 1000000 + "M";
  } else {
    viewStr = views / 1000 + "K";
  }
  let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div> 
</div>`;

  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  1000,
  7,
  "20:00",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

createCard(
  "Introduction to Backend | Sigma Web Dev video #3",
  "CodeWithHarry",
  100000,
  7,
  "30:00",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

createCard(
  "Introduction to Backend | Sigma Web Dev video #4",
  "CodeWithHarry",
  1000000,
  7,
  "40:00",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

createCard(
  "Introduction to Backend | Sigma Web Dev video #5",
  "CodeWithHarry",
  1000000000,
  7,
  "50:00",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

createCard(
  "Introduction to Backend | Sigma Web Dev video #6",
  "CodeWithHarry",
  1000000000000,
  7,
  "1:00:00",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

createCard(
  "Introduction to Backend | Sigma Web Dev video #7",
  "CodeWithHarry",
  1000000000000000,
  7,
  "2:00:00",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
