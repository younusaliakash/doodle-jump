document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    const doodler = document.createElement("div");

    let isGameOver = false;
    let platformCount = 5;
    let doodlerLeftSpace = 50;
    let doodlerBottomSpace = 150;
    let platForms = []
    let score = 0;

    class Platform {
        constructor(newPlatBottom) {
            this.left = Math.random() * 315
            this.bottom = newPlatBottom
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add("platform")
            visual.style.left = this.left + "px"
            visual.style.bottom = this.bottom + "px"
            grid.appendChild(visual)
        }
    }

    //create platform functionality
    function createPlatform() {
        for (let i = 0; i < platformCount; i++) {
            let platGap = 600 / platformCount;
            let newPlatFormBottom = 100 + i * platGap;
            let newPlatForm = new Platform(newPlatFormBottom)
            platForms.push(newPlatForm)
            console.log(platForms)

        }
    }

    //move platform 
    function movePlatforms() {
        if (doodlerBottomSpace > 100) {
            platForms.forEach(platform => {
                platform.bottom -= 4
                let visual = platform.visual
                visual.style.bottom = platform.bottom + 'px'

                if (platform.bottom < 10) {
                    let firstPlatform = platForms[0].visual
                    firstPlatform.classList.remove('platform');
                    platForms.shift()
                    console.log(platForms)

                    score++

                    let newPlatform = new Platform(600)
                    platForms.push(newPlatform)
                    console.log(platForms)
                }
            })
        }
    }


    function createDoodler() {
        grid.appendChild(doodler);
        doodler.classList.add("doodler")
        doodlerLeftSpace = platForms[0].left
        doodler.style.left = doodlerLeftSpace + "px"
        doodler.style.bottom = doodlerBottomSpace + "px"
    }


    function start() {
        if (!isGameOver) {
            createPlatform()
            createDoodler();
            setInterval(movePlatforms, 30);
        }
    }

    start()

})