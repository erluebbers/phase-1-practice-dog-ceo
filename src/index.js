// console.log('%c HI', 'color: firebrick')

const dogBreeds = []

document.addEventListener('DOMContentLoaded', () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(data => {
            data.message.forEach((element) => {
                let newImage = document.createElement('img')
                newImage.src = element
                document.querySelector('#dog-image-container').appendChild(newImage)
            })
        })
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(data => {
            let breeds = Object.keys(data.message)
            dogBreeds.push(...breeds)
            createList(breeds)
            sortList(dogBreeds)         
        })
    function createList (array) {
        array.forEach(element => {
            let newLi = document.createElement('li')
            newLi.innerText = element
            document.querySelector('#dog-breeds').appendChild(newLi)
            newLi.addEventListener('click', () => {
                newLi.style.color = "Crimson"
            })
        })
    }
    function sortList (array) {
        const dropDown = document.querySelector('#breed-dropdown')
        dropDown.addEventListener('change', (event) => {
            removeItems()
            let sortedArray = array.filter((element) => {
                return element.charAt(0) === event.target.value
        })
        createList(sortedArray)
        })
    }
    function removeItems () {
        let parentList = document.querySelector('#dog-breeds')
        while (parentList.firstChild) {
            parentList.removeChild(parentList.firstChild);
        }
    }
})