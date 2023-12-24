// document.addEventListener("DOMContentLoaded", () => {
//     const grid = document.querySelector(".grid");
//     const doodler = document.createElement("div");

//     let isGameOver = false;
//     let platformCount = 5;
//     let startPoint = 150
//     let doodlerLeftSpace = 50;
//     let doodlerBottomSpace = startPoint;
//     let platForms = []
//     let score = 0;
//     let isJumping = true;
//     let isGoingLeft = false;
//     let isGoingRight = false;
//     let isGoingUp = false;
//     let leftTimerId
//     let rightTimerId
//     let upTimerId
//     let downTimerId
//     const gravity = 0.9
//     let speed = 3


//     class Platform {
//         constructor(newPlatBottom) {
//             this.left = Math.random() * 315
//             this.bottom = newPlatBottom
//             this.visual = document.createElement('div')

//             const visual = this.visual
//             visual.classList.add("platform")
//             visual.style.left = this.left + "px"
//             visual.style.bottom = this.bottom + "px"
//             grid.appendChild(visual)
//         }
//     }

//     //create platform functionality
//     function createPlatform() {
//         for (let i = 0; i < platformCount; i++) {
//             let platGap = 600 / platformCount;
//             let newPlatFormBottom = 100 + i * platGap;
//             let newPlatForm = new Platform(newPlatFormBottom)
//             platForms.push(newPlatForm)
//             console.log(platForms)

//         }
//     }

//     //move platform 
//     function movePlatforms() {
//         if (doodlerBottomSpace > 100) {
//             platForms.forEach(platform => {
//                 platform.bottom -= 4
//                 let visual = platform.visual
//                 visual.style.bottom = platform.bottom + 'px'

//                 if (platform.bottom < 10) {
//                     let firstPlatform = platForms[0].visual
//                     firstPlatform.classList.remove('platform');
//                     platForms.shift()
//                     console.log(platForms)

//                     score++

//                     let newPlatform = new Platform(600)
//                     platForms.push(newPlatform)
//                     console.log(platForms)
//                 }
//             })
//         }
//     }


//     function createDoodler() {
//         grid.appendChild(doodler);
//         doodler.classList.add("doodler")
//         doodlerLeftSpace = platForms[0].left
//         doodler.style.left = doodlerLeftSpace + "px"
//         doodler.style.bottom = doodlerBottomSpace + "px"
//     }

//     function fall() {
//         isJumping = false;
//         clearTimeout(upTimerId);
//         downTimerId = setInterval(() => {
//             doodlerBottomSpace -= 5
//             doodler.style.bottom = doodlerLeftSpace + "px"
//             if (doodlerBottomSpace <= 0) {
//                 gameOver()
//             }
//             platForms.forEach(platform => {
//                 if (
//                     (doodlerBottomSpace >= platform.bottom) &&
//                     (doodlerBottomSpace <= (platform.bottom + 15)) &&
//                     ((doodlerLeftSpace + 60) >= platform.left) &&
//                     (doodlerLeftSpace <= (platform.left + 85)) && !isJumping) {
//                     startPoint = doodlerBottomSpace
//                     jump()
//                     console.log('startPoint', startPoint)
//                     isJumping = true;
//                 }
//             })
//         }, 20);
//     }

//     //jump functionality
//     function jump() {
//         clearInterval(downTimerId);
//         isJumping = true;
//         upTimerId = setInterval(() => {
//             doodlerBottomSpace += 29
//             doodler.style.bottom = doodlerBottomSpace + "px"

//             if (doodlerBottomSpace > startPoint + 200) {
//                 fall()
//                 isJumping = false;
//             }
//         }, 30);
//     }

//     function moveLeft() {
//         if (isGoingRight) {
//             clearInterval(rightTimerId)
//             isGoingRight = false;
//         }
//         isGoingLeft = true;
//         leftTimerId = setInterval(() => {
//             if (doodlerLeftSpace >= 0) {
//                 console.log("moving left")
//                 doodlerLeftSpace -= 5
//                 doodler.style.left = doodlerLeftSpace + "px"
//             } else {
//                 moveRight()
//             }
//         }, 20);
//     }

//     function moveRight() {
//         if (isGoingLeft) {
//             clearInterval(leftTimerId);
//             isGoingLeft = false;
//         }
//         isGoingRight = true;
//         rightTimerId = setInterval(() => {
//             if (doodlerLeftSpace <= 313) {
//                 console.log("right")
//                 doodlerLeftSpace += 5
//                 doodler.style.left = doodlerLeftSpace + "px"
//             } else {
//                 moveLeft()
//             }
//         }, 20)
//     }

//     //game controller 
//     function gameController(e) {
//         doodler.style.bottom = doodlerBottomSpace + "px"
//         if (e.key === 'ArrowLeft') {
//             moveLeft()
//         } else if (e.key === 'ArrowRight') {
//             moveRight()
//         }
//     }

//     //game over functionality
//     function gameOver() {
//         isGameOver = true;
//         while (grid.firstChild) {
//             grid.removeChild(grid.firstChild)
//         }
//         grid.innerHTML = score
//         clearInterval(downTimerId);
//         clearInterval(upTimerId);
//         clearInterval(leftTimerId);
//         clearInterval(rightTimerId);

//     }


//     function start() {
//         if (!isGameOver) {
//             createPlatform()
//             createDoodler();
//             jump()
//             setInterval(movePlatforms, 30);
//             document.addEventListener('keyup', gameController)
//         }
//     }

//     start()

// })

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const doodler = document.createElement('div')
  let isGameOver = false
  let speed = 3
  let platformCount = 5
  let platforms = []
  let score = 0
  let doodlerLeftSpace = 50
  let startPoint = 150
  let doodlerBottomSpace = startPoint
  const gravity = 0.9
  let upTimerId
  let downTimerId
  let isJumping = true
  let isGoingLeft = false
  let isGoingRight = false
  let leftTimerId
  let rightTimerId

  class Platform {
    constructor(newPlatBottom) {
      this.left = Math.random() * 315
      this.bottom = newPlatBottom
      this.visual = document.createElement('div')

      const visual = this.visual
      visual.classList.add('platform')
      visual.style.left = this.left + 'px'
      visual.style.bottom = this.bottom + 'px'
      grid.appendChild(visual)
    }
  }


  function createPlatforms() {
    for(let i =0; i < platformCount; i++) {
      let platGap = 600 / platformCount
      let newPlatBottom = 100 + i * platGap
      let newPlatform = new Platform (newPlatBottom)
      platforms.push(newPlatform)
      console.log(platforms)
    }
  }

  function movePlatforms() {
    if (doodlerBottomSpace > 200) {
        platforms.forEach(platform => {
          platform.bottom -= 4
          let visual = platform.visual
          visual.style.bottom = platform.bottom + 'px'

          if(platform.bottom < 10) {
            let firstPlatform = platforms[0].visual
            firstPlatform.classList.remove('platform')
            platforms.shift()
            console.log(platforms)
            score++
            var newPlatform = new Platform(600)
            platforms.push(newPlatform)
          }
      }) 
    }
    
  }

  function createDoodler() {
    grid.appendChild(doodler)
    doodler.classList.add('doodler')
    doodlerLeftSpace = platforms[0].left
    doodler.style.left = doodlerLeftSpace + 'px'
    doodler.style.bottom = doodlerBottomSpace + 'px'
  }

function fall() {
  isJumping = false
    clearInterval(upTimerId)
    downTimerId = setInterval(function () {
      doodlerBottomSpace -= 5
      doodler.style.bottom = doodlerBottomSpace + 'px'
      if (doodlerBottomSpace <= 0) {
        gameOver()
      }
      platforms.forEach(platform => {
        if (
          (doodlerBottomSpace >= platform.bottom) &&
          (doodlerBottomSpace <= (platform.bottom + 15)) &&
          ((doodlerLeftSpace + 60) >= platform.left) && 
          (doodlerLeftSpace <= (platform.left + 85)) &&
          !isJumping
          ) {
            console.log('tick')
            startPoint = doodlerBottomSpace
            jump()
            console.log('start', startPoint)
            isJumping = true
          }
      })

    },20)
}

  function jump() {
    clearInterval(downTimerId)
    isJumping = true
    upTimerId = setInterval(function () {
      console.log(startPoint)
      console.log('1', doodlerBottomSpace)
      doodlerBottomSpace += 20
      doodler.style.bottom = doodlerBottomSpace + 'px'
      console.log('2',doodlerBottomSpace)
      console.log('s',startPoint)
      if (doodlerBottomSpace > (startPoint + 200)) {
        fall()
        isJumping = false
      }
    },30)
  }

  function moveLeft() {
    if (isGoingRight) {
        clearInterval(rightTimerId)
        isGoingRight = false
    }
    isGoingLeft = true
    leftTimerId = setInterval(function () {
        if (doodlerLeftSpace >= 0) {
          console.log('going left')
          doodlerLeftSpace -=5
           doodler.style.left = doodlerLeftSpace + 'px'
        } else moveRight()
    },20)
  }

  function moveRight() {
    if (isGoingLeft) {
        clearInterval(leftTimerId)
        isGoingLeft = false
    }
    isGoingRight = true
    rightTimerId = setInterval(function () {
      //changed to 313 to fit doodle image
      if (doodlerLeftSpace <= 313) {
        console.log('going right')
        doodlerLeftSpace +=5
        doodler.style.left = doodlerLeftSpace + 'px'
      } else moveLeft()
    },20)
  }
  
  function moveStraight() {
    isGoingLeft = false
    isGoingRight = false
    clearInterval(leftTimerId)
    clearInterval(rightTimerId)
  }

  //assign functions to keyCodes
  function control(e) {
    doodler.style.bottom = doodlerBottomSpace + 'px'
    if(e.key === 'ArrowLeft') {
      moveLeft()
    } else if (e.key === 'ArrowRight') {
      moveRight()
    } else if (e.key === 'ArrowUp') {
      moveStraight()
    }
  }

  function gameOver() {
    isGameOver = true
    while (grid.firstChild) {
      console.log('remove')
      grid.removeChild(grid.firstChild)
    }
    grid.innerHTML = score
    clearInterval(upTimerId)
    clearInterval(downTimerId)
    clearInterval(leftTimerId)
    clearInterval(rightTimerId)
  }


  function start() {
    if (!isGameOver) {
      createPlatforms()
      createDoodler()
      setInterval(movePlatforms,30)
      jump(startPoint)
      document.addEventListener('keyup', control)
    } 
  }
  start()
})