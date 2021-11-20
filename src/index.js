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
            breeds.forEach(element => {
                let newLi = document.createElement('li')
                newLi.innerText = element
                document.querySelector('#dog-breeds').appendChild(newLi)
                newLi.addEventListener('click', () => {
                    newLi.style.color = "Crimson"
                })
            })
            const dropDown = document.querySelector('#breed-dropdown')
            dropDown.addEventListener('change', (event) => {
                let sortedArray = dogBreeds.filter((element) => {
                    return element.charAt(0) === event.target.value
                })
                console.log(sortedArray)
            })
        })
})