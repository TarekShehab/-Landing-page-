// Get the list that we will put the anchors in
let navbarList = document.getElementById('navbar__list')

// Get the main that we add the sections to
const main = document.querySelector('main')

// Get the navbar menu
const navbar = document.querySelector('.navbar__menu')

// Fake paragraphs for the sections
const paragraph1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.'
const paragraph2 = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'

// Determine if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        (rect.top + 150) >= 0 &&  //is top in viewport
        rect.left >= 0 &&  //is left in viewport
        (rect.bottom - 150) <= (window.innerHeight || document.documentElement.clientHeight) &&  //is bottom in viewport
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)  //is right in viewport
    );
}

// Add a scroll event listener to the document to highlight the section in the viewport
function activeSectionHandle(contentsections){
    document.addEventListener('scroll', () => {
        for (let section of contentSections){
            const sectionHTML = document.getElementById(section.id) 
            if(isInViewport(sectionHTML.querySelector('p'))){
                section.isActive = true
                sectionHTML.classList.add('active-section')
            }else{
                section.isActive = false
                sectionHTML.classList.remove('active-section')            
            }
        }
    })
}

// Helper method that runs a callback method when user stops scrolling 
const onScrollStop = callback => {
    let isScrolling;
    window.addEventListener('scroll', e => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => callback(), 150);
      },
      false
    )
}

// Handle showing and hiding the navigation bar
function toggleNavbarHandle(){

    // Shows navigation bar when the user scrolls
    document.addEventListener('scroll', () => {
        navbar.style.visibility = 'visible'
    })
    
    // Hide navigation bar after user stops scrolling
    onScrollStop(() => {
        setTimeout(() => {
            navbar.style.visibility = 'hidden'
        }, "1500")
    })

}

function scrollToTopButtonHandle(){
    
    const doc = document.querySelector('html')
    const toTop = document.getElementById('scrollup-button')

    document.addEventListener('scroll', () => {
        if (window.scrollY >= (doc.clientHeight/2)){
            toTop.style.visibility = 'visible'
        }
        else{
            toTop.style.visibility = 'hidden'            
        }
        
    })

}

class Section{
    constructor(id, dataNav, title, contents){
        this.id = id
        this.dataNav = dataNav
        this.title = title
        this.contents = contents
        this.isActive = false
    }

    // Create the section html element that will be viewed on the page
    createContentSection(){
        const sectionElement = document.createElement('section')
        sectionElement.setAttribute('id', this.id)
        sectionElement.setAttribute('data-nav', this.dataNav)
        if (this.isActive)
            sectionElement.setAttribute('class', 'active-section')
        
        const divElement = document.createElement('div')
        divElement.setAttribute('class', 'landing__container')
        sectionElement.appendChild(divElement)

        const h2Element = document.createElement('h2')
        h2Element.textContent = this.title
        divElement.appendChild(h2Element)

        for(let paragraph of this.contents){
            const pElement = document.createElement('p')
            pElement.textContent = paragraph
            divElement.appendChild(pElement)
        }

        return sectionElement
    }

    // Add the section anchor to the navigation bar
    createAnchorInNavbar(){
        const listItemElement = document.createElement('li')
        listItemElement.setAttribute('class', 'menu__link')

        const anchorElement = document.createElement('a')
        anchorElement.setAttribute('href', "#"+this.id)
        anchorElement.textContent = this.title

        listItemElement.appendChild(anchorElement)

        navbarList.appendChild(listItemElement)

        return listItemElement
    }

}

// Create an array with all the sections that are supposedly fetched from a database xD
const section1 = new Section('section1', 'Section 1', 'Section 1', [paragraph1, paragraph2])
const section2 = new Section('section2', 'Section 2', 'Section 2', [paragraph1, paragraph2])
const section3 = new Section('section3', 'Section 3', 'Section 3', [paragraph1, paragraph2])
const section4 = new Section('section4', 'Section 4', 'Section 4', [paragraph1, paragraph2])
const contentSections = [section1, section2, section3, section4]

// Populate the page with content sections, anchors, and add necessary event listeners
function buildApp(){

    for (let section of contentSections){
        
        // add the section on page
        const sectionHTML = section.createContentSection()
        main.appendChild(sectionHTML)
        
        // add the section anchor in the navigation bar
        const listItemHTML = section.createAnchorInNavbar()
        
    }

    // Add scroll event listener to handle the active section task
    activeSectionHandle(contentSections)

    // Show/Hide navigation bar
    toggleNavbarHandle()

    // Show/hide scroll to top button
    scrollToTopButtonHandle()
}


buildApp()
