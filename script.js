let w = Math.floor((Math.random() * 78947) + 1);
let x = Math.floor((Math.random() * 1567) + 1);
let y = Math.floor((Math.random() * 141) + 1);
let z = Math.floor((Math.random() * 103) + 1);
let posts = [
    {   'profileimg': './img/profile-post1.jpg',
        'author': 'mark.salzhügel',
        'location': 'Bolivien',
        'image': './img/markimg.PNG',
        'isLiked': 'false',
        'likes': `${w}`,
        'description': 'The concept of JSON overwhelms me &#128555',
        'hashtags': '#SQL #Datamining',
        'comments': [{'name': 'Jason Statham', 'comment': '&#128526'}, {'name': 'rndm.guy243', 'comment': 'I guess the JSON Array is not the only problem &#129315 &#129315'}, {'name': 'Jason Derulo', 'comment': 'Jaaasoon Deruloo &#127925'}]
    },
    {   'profileimg': './img/devprofile.PNG',
        'author': 'Developer-Akademie',
        'location': 'München',
        'image': './img/dev-akademieimg.PNG',
        'isLiked': 'false',
        'likes': `${x}`,
        'description': 'Werde jetzt Software Developer mit unserer Hilfe! <a href="https://developerakademie.com">https://developerakademie.com</a> ',
        'hashtags': '',
        'comments': [{'name': 'LifetimeHarzler', 'comment': 'Man kann niemals in 9 Monaten das lernen was andere in 4 Jahren lernen 100% SCAM!!'},{'name': 'bachelorOfBP','comment': 'Also ich habe Informatik studiert und bin jetzt Bierpongkönig und ja...'}]
    },
    {   'profileimg': './img/profile-post3.jpg',
        'author': 'sndr.g',
        'location': 'Zürich',
        'image': './img/post3.PNG',
        'isLiked': 'true',
        'likes': `${y}`,
        'description': `Amore mio &#x2764;&#xFE0F &#x2764;&#xFE0F &#x2764;&#xFE0F`,
        'hashtags': '',
        'comments': [{'name': 'sbyl.82', 'comment': 'So Süess OMG!!'}, {'name': 'seckin.ap', 'comment': 'Jöö die chlii Terroristin wachst soo schnell &#129392'}]
    },
    {   'profileimg': './img/profile-post4.PNG',
        'author': 'anii.nova',
        'location': 'Zürich',
        'image': './img/post4.PNG',
        'isLiked': 'true',
        'likes': `${z}`,
        'description': '',
        'hashtags': '#Zürich #Hooka',
        'comments': ['','']
    }
];


function render() {
    let content = document.getElementById('cards');
    content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        content.innerHTML += cardTemplate(i, post['profileimg'], post['author'], post['location'], post['image'], post['likes'], post['description'], post['hashtags']);
        
    }
}


function addComment() {

}


function handleKeyPress() {

}


function changeLike() {

}


function cardTemplate(index, profileimg, name, location, image, likes, description, hashtags) {
    return /*html*/`
            <div class="card" id="card${index}">
              <div class="card-title-row">
                <img
                  class="card-title-row-img1"
                  src="${profileimg}"
                  alt="Account Bild"
                />
                <div class="card-title-row-div">
                  <p>${name}</p>
                  <span>${location}</span>
                </div>
                <img
                  class="white-outline"
                  src="./img/icons/dots.svg"
                  alt="Punkte Icon"
                />
              </div>
              <div class="card-image">
                <img src="${image}" alt="Account Bild" />
              </div>
              <div class="card-icon-row white-outline">
                <div class="icon-margin">
                  <img onclick="changeLike()" src="./img/icons/heart.svg" alt="Herz Icon" /><img
                    src="./img/icons/comment.svg"
                    alt="Chat Icon"
                  /><img src="./img/icons/share.svg" alt="Teilen Icon" />
                </div>
                <div>
                  <img src="./img/icons/bookmark.svg" alt="Buchmarke Icon" />
                </div>
              </div>
              <div class="card-likes"><span>Gefällt ${likes} Mal</span></div>
              <div class="card-description"><span>${description}</span></div>
              <div class="card-hashtags"><a>${hashtags}</a></div>
              <div class="card-comments" id="comments${index}">
                <div>
                  <p>raf_camora</p>
                  <span>Nice Beat!!</span>
                </div>
                <div>
                  <p>user777</p>
                  <span
                    >Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit.</span
                  >
                </div>
              </div>
              <div class="card-input">
                <input id="input${index}" type="text" placeholder="Kommentieren ..." max="250" />
              </div>
              <div class="div-border">
              </div>
            </div>`
}