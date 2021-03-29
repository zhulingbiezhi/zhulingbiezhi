const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return ` ${progressBar} `
}

const readme = `
<h2 align="center">👋 Hello! I'm 去去.</h2>

---

年度余额   ${progressBarOfThisYear}  ${(progressOfThisYear * 100).toFixed(2)} %

---

![GitHub visiters](https://visitor-badge.glitch.me/badge?page_id=zhulingbiezhi.zhulingbiezhi)
![GitHub followers](https://img.shields.io/github/followers/zhulingbiezhi?label=Follow&style=social)

![Golang](https://img.shields.io/badge/-Golang-8fcfd1?style=plastic&logo=Golang)
![C++](https://img.shields.io/badge/-C++-8fcfd1?style=plastic&logo=C++)

---

- 🔭 I’m currently working at [Hellotalk](https://www.hellotalk.com) as a 【**golang backend engineer**】.

- 🌱 I’m currently learning 【**Go**】

- 💬 Ask me about 【**Go**】

---

![](https://github-readme-stats.vercel.app/api?username=zhulingbiezhi&theme=dark)

---

⏰ Updated on ${new Date().toUTCString()}`
console.log(readme)
