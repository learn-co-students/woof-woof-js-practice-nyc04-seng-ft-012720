const goodBoySwitch = document.querySelector("button#good-dog-filter")
const dogList = document.querySelector("div#dog-bar")
const dogDetails = document.querySelector("div#dog-info")
let badDogs = true
//   ------    INITIAL FETCH   -------
fetch("http://localhost:3000/pups")
  .then(response => response.json())
  .then(dogData => {
       dogData.forEach((dog) => {
            const dogSpan = document.createElement('span')
            if (!dog.isGoodDog) {
                dogSpan.className = "1"
            // } else {
            //     dogSpan.id = "2"
            }
            dogSpan.textContent = `${dog.name}`
            dogList.append(dogSpan)
            dogSpan.addEventListener("click", (ev) => {
                let dogGoodness = null
                if (dog.isGoodDog) {
                    dogGoodness = "Good Dog!"
                } else {
                    dogGoodness = "Bad Dog!"
                }
                dogDetails.innerHTML = `
                           <img src=${dog.image}>
                           <h2>${dog.name}</h2>
                           <button>${dogGoodness}</button>
                           `
                dogDetails.append()
                dogDetails.children[2].addEventListener("click", (ev) => {
                           if (dog.isGoodDog) {
                               dogGoodness = "Bad Dog!"
                               dog.isGoodDog = false
                               dogSpan.className = "1"
                           } else {
                               dogGoodness = "Good Dog!"
                               dog.isGoodDog = true
                               dogSpan.className = "2"
                           }
                           fetch(`http://localhost:3000/pups/${dog.id}`, {
                                 method: "PATCH",
                                 headers: {
                                     "Content-Type": "application/json",
                                     "Accept": "application/json"
                                     },
                                 body: JSON.stringify({ isGoodDog: dog.isGoodDog })
                      })
                      dogDetails.children[2].textContent = `${dogGoodness}`
                })
            })
        })
    })
goodBoySwitch.addEventListener("click", (ev) => {
    const badDogList = dogList.querySelectorAll(`span[class="1"]`)
    if (badDogs) {
        ev.target.textContent = "Filter good dogs: ON"
        badDogList.forEach((dogSpan) => { dogSpan.style.display = "none" })
        badDogs = false
    } else {
        ev.target.textContent = "Filter good dogs: OFF"
        badDogList.forEach((dogSpan) => { dogSpan.style.display = "flex" })
        badDogs = true
    }
})

