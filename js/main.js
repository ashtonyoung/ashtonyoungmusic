let homeBtn = document.getElementById("homeBtn")
let curriculumBtn = document.getElementById("curriculumBtn")
let pricingBtn = document.getElementById("pricingBtn")
let contactBtn = document.getElementById("contactBtn")
let mediaBtn = document.getElementById("mediaBtn")

let buttonList = [homeBtn, curriculumBtn, pricingBtn, contactBtn, mediaBtn]

let homeSection = document.getElementById("home")
let curriculumSection = document.getElementById("curriculum")
let pricingSection = document.getElementById("pricing")
let contactSection = document.getElementById("contact")
let mediaSection = document.getElementById("media")

let sectionList = [homeSection, curriculumSection, pricingSection, contactSection, mediaSection]

// let topAlbums = fetch("http://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=youngashton28&api_key=13b7b6169aa8eaeb94c0f097d0edf6ff&format=json")
// console.log(topAlbums)

function switchPage(newPage) {
    for (let section of sectionList) {
        section.style.display = "none"
    }
    newPage.style.display = "block"
}

function goHome() {
    for (let section of sectionList) {
        section.style.display = "none"
    }
    homeSection.style.display = "block"
}
function goCurriculum() {
    for (let section of sectionList) {
        section.style.display = "none"
    }
    curriculumSection.style.display = "block"
}
function goPricing() {
    for (let section of sectionList) {
        section.style.display = "none"
    }
    pricingSection.style.display = "block"
}
function goContact() {
    for (let section of sectionList) {
        section.style.display = "none"
    }
    contactSection.style.display = "block"
}
function goMedia() {
    for (let section of sectionList) {
        section.style.display = "none"
    }
    mediaSection.style.display = "block"
}

homeBtn.addEventListener("click", goHome)
curriculumBtn.addEventListener("click", goCurriculum)
pricingBtn.addEventListener("click", goPricing)
contactBtn.addEventListener("click", goContact)
mediaBtn.addEventListener("click", goMedia)

curriculumSection.style.display = "none"
pricingSection.style.display = "none"
contactSection.style.display = "none"
mediaSection.style.display = "none"

