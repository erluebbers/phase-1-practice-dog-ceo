// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for (const source of data) {
                
            }
        })
})

// let newImage = document.createElement('img')
// newImage.src = element