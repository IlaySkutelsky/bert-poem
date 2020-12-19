// console.log("hii");

let bert
init()
async function init() {
  bert = new Bert()
  bert.init()
  // fetch('/bert/init', {
  //   method: 'POST'
  // });
}

function bodyLoaded() {
  showElements()
}

function showElements() {
  let elements = document.querySelectorAll(".hidden")
  for (let i=0; i<elements.length; i++) {
    let element = elements[i];
    setTimeout(_=>{
      element.classList.remove("hidden")
    }, i*100+200)
  }
}

async function wordClicked(e) {
  e.target.classList.add('loading')
  let lineText = e.target.parentElement.innerText.toLowerCase()
  let wordsArray = lineText.split(' ')
  let wordIndex = getChildIndex(e.target)
  wordsArray[wordIndex] = `[MASK]`
  let text = wordsArray.join('+')
  console.log(text)
  // let response = await fetch(`/bert/mask?text=` + text);
  let responseJSON = await bert.getMask(text);
  let response = JSON.parse(responseJSON)
  e.target.classList.remove('loading')
  // addTempClass(e.target,'disappearing', 500)
  // let suggestedWords = await response.json()
  let suggestedWords = response
  console.log(suggestedWords);
  let newWord = suggestedWords[0].token_str
  animateWordReplace(e.target, newWord)
  // addTempClass(e.target,'appearing', 500)
}

let hasArunningBrowser = true

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState == 'hidden') {
      if (hasArunningBrowser) {
        bert.close()
      //   fetch('/bert/close', {
      //     method: 'POST', 
      //     keepalive: true,
      //  })
       hasArunningBrowser = false
      }
    }
    if (document.visibilityState == 'visible') {
      if (!hasArunningBrowser) {
        bert.init()
      //   fetch('/bert/init', {
      //     method: 'POST', 
      //     keepalive: true,
      //  })
       hasArunningBrowser = true
      }
    }
});

function getChildIndex(element) {
  return Array.from(element.parentNode.children).indexOf(element);
}

function animateWordReplace(wordElement, newWord) {
  let disappearAnimation =  wordElement.animate([
    {transform: 'translateY(0px)', opacity: 1},
    {transform: 'translateY(16px)', opacity: 0}
  ],
    {
      fill: 'forwards',
      duration: 500,
      easing: 'ease-in-out',
      iterations: 1
    }
  )
  disappearAnimation.onfinish = function() {
    wordElement.innerText = newWord
    wordElement.animate([
      {transform: 'translateY(-16px)', opacity: 0},
      {transform: 'translateY(0px)', opacity: 1}
    ],
      {
        fill: 'forwards',
        duration: 500,
        easing: 'ease-in-out',
        iterations: 1
      }
    )
  }
}

function addTempClass(element, className, ms) {
  element.classList.add(className)
  setTimeout(_=>{
    element.classList.remove(className)
  }, ms)
}