let posts = [
    {   'profileimg': './img/profile-post1.jpg',
        'author': 'mark.salzhügel',
        'location': 'Bolivien',
        'image': './img/markimg.PNG',
        'isLiked': true,
        'likes': `47400`,
        'description': 'The concept of JSON overwhelms me &#128555',
        'hashtags': '#SQL #Datamining',
        'comments': [{'name': 'Jason Statham', 'comment': '&#128526 &#128526'}, {'name': 'rndm.guy243', 'comment': "I suspect the JSON Array isn't the sole issue you're facing. &#129315 &#129315"}, {'name': 'jason_derulo_official', 'comment': '&#127925 Jaaasoon Deruloo &#127925'}]
    },
    {   'profileimg': './img/devprofile.PNG',
        'author': 'Developer-Akademie',
        'location': 'München',
        'image': './img/dev-akademieimg.PNG',
        'isLiked': false,
        'likes': `1403`,
        'description': 'Werde jetzt Software Developer mit unserer Hilfe! <a href="https://developerakademie.com">https://developerakademie.com</a> ',
        'hashtags': '',
        'comments': [{'name': 'LifetimeHarzler', 'comment': 'Man kann niemals in 9 Monaten das lernen was andere in 4 Jahren lernen 100% SCAM!!'}, {'name': 'bachelorOfBP','comment': 'Also ich habe Informatik studiert und bin jetzt Bierpongkönig und ja...'}, {'name': 'katy.rzs','comment': 'Wieviel kostet die Weiterbildung??'}]
    },
    {   'profileimg': './img/profile-post3.jpg',
        'author': 'sndr.g',
        'location': 'Zürich',
        'image': './img/post3.PNG',
        'isLiked': true,
        'likes': `214`,
        'description': `Amore mio &#x2764;&#xFE0F &#x2764;&#xFE0F &#x2764;&#xFE0F`,
        'hashtags': '',
        'comments': [{'name': 'sbyl.82', 'comment': 'So Süess OMG!!'}, {'name': 'seckin.ap', 'comment': 'Jöö die chlii Terroristin wachst soo schnell &#129392'}] //seckin.ap = posts[i(3)]['comments'][j(2)]['name']
    },
    {   'profileimg': './img/profile-post4.PNG',
        'author': 'anii.nova',
        'location': 'Zürich',
        'image': './img/post4.PNG',
        'isLiked': false,
        'likes': `85`,
        'description': '',
        'hashtags': '#Zürich #Hooka',
        'comments': []
    }
];
load();


function render() {
    let content = document.getElementById('cards');
    content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        content.innerHTML += cardTemplate(i, post);

        checkLike(i);
        
        let comments = document.getElementById(`comments${i}`);

        for (let j = 0; j < post['comments'].length; j++) {
            const comment = post['comments'][j];
            comments.innerHTML += commentTemplate(comment);
            
        }
    }
}


function addComment(index) {
  let input = document.getElementById(`card-input${index}`);
  let profileName = 'seckin.ap';
  let commentText = input.value;

    if (commentText !== '') {
      let newComment = {
        'name': profileName,
        'comment': commentText
      };

    posts[index]['comments'].push(newComment);
    render();
    save();
  }
}


function handleKeyPress(index, event) {
  if (event.key === "Enter") {
    addComment(index);
  }
}


function toggleInputButton(i) {
  let input = document.getElementById(`card-input${i}`);
  let button = document.getElementById(`card-button${i}`);

    if (input.value.trim() !== '') {
      button.classList.remove('d-none');
    } else {
      button.classList.add('d-none');
    }
}


function checkLike(index) {
  let isLiked = posts[index]['isLiked'];
  let heart = document.getElementById(`heart${index}`);

  if (isLiked === true) {
    heart.src = "img/icons/heart-red.png";
    heart.classList.remove('white-outline')
  } else {
    heart.src = "img/icons/heart.svg";
    heart.classList.add('white-outline')
  }
}


function changeLikeNumber(index) {
  let isLiked = posts[index]['isLiked'];
  let currentLikes = parseInt(posts[index]['likes']);

  if (isLiked) {
    currentLikes--;
  } else {
    currentLikes++;
  }

  posts[index]['likes'] = currentLikes.toString();

  let likes = document.getElementById(`likes${index}`);
  likes.innerHTML = /*html*/`<span>Gefällt ${currentLikes} Mal</span>`;

  posts[index]['isLiked'] = !isLiked;

  save();
}

function changeLike(index) {

  changeLikeNumber(index);

  let heart = document.getElementById(`heart${index}`);
  if (posts[index]['isLiked']) {
    heart.src = "img/icons/heart-red.png";
    heart.classList.remove('white-outline');
  } else {
    heart.src = "img/icons/heart.svg";
    heart.classList.add('white-outline');
  }
}


function save() {
  let postsAsText = JSON.stringify(posts);
  localStorage.setItem('posts', postsAsText);
}


function load() {
  let postsAsText = localStorage.getItem('posts');

  if (postsAsText) {
    posts = JSON.parse(postsAsText); 
  }
}


function commentTemplate(comment) {
    return /*html*/`
            <div>
              <p>${comment['name']}</p>
              <span>${comment['comment']}</span>
            </div>`
}


function cardTemplate(index, post) {
    return /*html*/`
            <div class="card" id="card${index}">
              <div class="card-title-row">
                <img
                  class="card-title-row-img1"
                  src="${post['profileimg']}"
                  alt="Account Bild"
                />
                <div class="card-title-row-div">
                  <p>${post['author']}</p>
                  <span>${post['location']}</span>
                </div>
                <img
                  class="white-outline"
                  src="./img/icons/dots.svg"
                  alt="Punkte Icon"
                />
              </div>
              <div class="card-image">
                <img src="${post['image']}" alt="Account Bild" />
              </div>
              <div class="card-icon-row">
                <div class="icon-margin">
                  <img id="heart${index}" class="white-outline" onclick="changeLike(${index})" src="" alt="Herz Icon" /><img
                    class="white-outline"
                    src="./img/icons/comment.svg"
                    alt="Chat Icon"
                  /><img class="white-outline" src="./img/icons/share.svg" alt="Teilen Icon" />
                </div>
                <div>
                  <img class="white-outline" src="./img/icons/bookmark.svg" alt="Buchmarke Icon" />
                </div>
              </div>
              <div class="card-likes" id="likes${index}"><span>Gefällt ${post['likes']} Mal</span></div>
              <div class="card-description"><span>${post['description']}</span></div>
              <div class="card-hashtags"><a>${post['hashtags']}</a></div>
              <div class="card-comments" id="comments${index}">
              </div>
              <div class="card-input-div">
                <input value="" oninput="toggleInputButton(${index})" onkeyup="handleKeyPress(${index}, event)" id="card-input${index}" type="text" placeholder="Kommentieren ..." max="250" />
                <button class="card-input-div-button d-none" id="card-button${index}" onclick="addComment(${index})">Posten</button>
              </div>
              <div class="div-border">
              </div>
            </div>`
}