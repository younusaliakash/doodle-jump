document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    const doodler = document.createElement("div");

    let isGameOver = false;
    let platformCount = 5;
    let doodlerLeftSpace = 50;
    let doodlerBottomSpace = 150;
    let platForms = []

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

    function createPlatform() {
        for (let i = 0; i < platformCount; i++) {
            let platGap = 600 / platformCount;
            let newPlatFormBottom = 100 + i * platGap;
            let newPlatForm = new Platform(newPlatFormBottom)
            platForms.push(newPlatForm)
            console.log(platForms)

        }
    }

    createPlatform()

    function createDoodler() {
        grid.appendChild(doodler);
        doodler.classList.add("doodler")
        doodler.style.bottom = doodlerBottomSpace + "px"

    }
    createDoodler();
})