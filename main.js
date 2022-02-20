// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


function heartClick(e) {
  mimicServerCall()
    .then(function(res) {
      
      if (e.target.className === 'activated-heart') {
        e.target.textContent = EMPTY_HEART;
        e.target.className = ''
      }
      else {
        e.target.textContent = FULL_HEART;
        e.target.className = 'activated-heart'
      }
    
    })
    .catch(function(res) {
      console.log(res)
      const modal = document.getElementById('modal');
      modal.className = '';
    
      const msg = document.getElementById('modal-message');
      console.log(msg);
      msg.textContent = res

      setTimeout(() => modal.className = 'hidden',3000);
    })
}


function setUp() {

  let hearts = document.querySelectorAll('.like');

  hearts.forEach((heart) => {
    heart.addEventListener('click', (e) => {
      heartClick(e);
    });
  });

}
setUp();

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
