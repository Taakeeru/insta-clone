let posts = [
    {   'author': 'Marc.Salzhügel',
        'location': 'Bolivien',
        'image': './img/',
        'description': 'The concept of JSON overwhelms me (overwhelm emoji)',
        'comments': [{'name': 'Jason Statham', 'comment': '(zwinker emoji)'}, {'name': 'rndm.guy243', 'comment': 'I guess the JSON Array is not the only problem (ROFL emoji)'}, {'name': 'Jason Derulo', 'comment': 'Jaaasoon Deruloo (note emoji)'}]
    },
    {   'author': 'Developer-Akademie',
        'location': 'München',
        'image': './img/',
        'description': 'Werde jetzt Software Developer mit unserer Hilfe!',
        'comments': [{'name': 'LifetimeHarzler', 'comment': 'Man kann niemals in 9 Monaten das lernen was andere in 4 Jahren lernen 100% SCAM!!'},{'name': 'bachelorOfBP','comment': 'Also ich habe Informatik studiert und bin jetzt Bierpongkönig'}]
    },
    {   'author': 'Sandro.G',
        'location': 'Zürich',
        'image': './img/',
        'description': 'Amore mio (herz emoji)',
        'comments': [{'name': 'sbyl.82', 'comment': 'So Süess OMG!!'}, {'name': 'seckin.ap', 'comment': 'Die chlii Terroristin wird Erwachse (smile emoji)'}]
    },
    {   'author': 'anii.nova',
        'location': 'Zürich',
        'image': './img/',
        'description': '',
        'comments': ['','']
    },
    {   'author': '',
        'location': '',
        'image': './img/',
        'description': '',
        'comments': ['','']
    }
];


let x = Math.floor((Math.random() * 1000) + 1);


function render() {
    let content = document.getElementById('cards');
    content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        content.innerHTML += cardTemplate(post['author'], );
        
    }
}


function addComment() {

}

function handleKeyPress() {

}

function cardTemplate(name, ) {
    return /*html*/`
            <div class="card" id="card">
              <div class="card-title-row">
                <img
                  class="card-title-row-img1"
                  src="./img/icons/seck.jpg"
                  alt="Account Bild"
                />
                <div class="card-title-row-div">
                  <p>${name}</p>
                  <span>Zürich</span>
                </div>
                <img
                  class="white-outline"
                  src="./img/icons/dots.svg"
                  alt="Punkte Icon"
                />
              </div>
              <div class="card-image">
                <img src="./img/icons/seck.jpg" alt="Account Bild" />
              </div>
              <div class="card-icon-row white-outline">
                <div class="icon-margin">
                  <img src="./img/icons/heart.svg" alt="Herz Icon" /><img
                    src="./img/icons/comment.svg"
                    alt="Chat Icon"
                  /><img src="./img/icons/share.svg" alt="Teilen Icon" />
                </div>
                <div>
                  <img src="./img/icons/bookmark.svg" alt="Buchmarke Icon" />
                </div>
              </div>
              <div class="card-likes"><span>Gefällt ${x} Mal</span></div>
              <div class="card-comments">
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
                <input type="text" placeholder="Kommentieren ..." max="250" />
              </div>
              <div class="div-border">
              </div>
            </div>`
}