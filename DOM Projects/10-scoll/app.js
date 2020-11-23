// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const _date = document.querySelector('#date')
_date.innerHTML = new Date().getFullYear()

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')

// this element height is set to zero
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function() {
    // linksContainer.classList.toggle("show-links")

    // getBoundingClientRect() is a build-in method
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
        // console.log(linksHeight)
    if (containerHeight === 0) {

        // inline style is actual stronger than  CSS stylesheet
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0
    }
})



// ********** fixed navbar ************
const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', function() {
    // console.log(window.pageYOffset)
    const navHeight = navbar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 600) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }
})


// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault()
            //navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1)
        console.log(" e.currentTarget : " + e.currentTarget.getAttribute('href').slice(1))
        console.log(" e.target : " + e.target.getAttribute('href').slice(1))


        console.log(id)
        const element = document.getElementById(id)
        console.log(element)

        // console.log("element.offsetTop : " + element.offsetTop)

        //calculate the nav bar height
        const navHeight = navbar.getBoundingClientRect().height
        console.log("navHeight: " + navHeight)

        // calculate the links container height
        const containerHeight = linksContainer.getBoundingClientRect().height

        // whether the nav has fixed nav or not
        const fixedNav = navbar.classList.contains("fixed-nav")

        // console.log(element.offsetTop)
        let position = fixedNav ? element.offsetTop - navHeight : element.offsetTop - navHeight * 2
            // console.log(position)
            // if (!fixedNav) {
            //     position = position - navHeight
            // }

        if (navHeight > 82) {
            position = position + containerHeight
        }
        window.scrollTo({ left: 0, top: position })
        linksContainer.style.height = 0
    })
})