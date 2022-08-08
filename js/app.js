// get the list that we will put the anchors in
let navbarList = document.getElementById('navbar__list')

// Add all sections to the page
const main = document.querySelector('main')

const paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod."
const paragraph2 = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."

class Section{
    constructor(id, dataNav, title, contents){
        this.id = id
        this.dataNav = dataNav
        this.title = title
        this.contents = contents
        this.isActive = false
    }

    // this method creates the section html element that will be viewed on the page
    createContentSection(){
        const sectionElement = document.createElement('section')
        sectionElement.setAttribute('id', this.id)
        sectionElement.setAttribute('data-nav', this.dataNav)
        if (this.isActive)
            sectionElement.setAttribute('class', 'your-active-class')
        
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

    // Adds the anchor to this section in the navigation bar
    createAnchorInNavbar(){
        const listItemElement = document.createElement('li')
        listItemElement.setAttribute('class', 'menu__link')

        const anchorElement = document.createElement('a')
        anchorElement.setAttribute('href', "#"+this.id)
        anchorElement.textContent = this.title

        listItemElement.appendChild(anchorElement)
        navbarList.appendChild(listItemElement)
    }

}

const section1 = new Section("section1", "Section 1", "Section 1", [paragraph1, paragraph2], false)
const section2 = new Section("section2", "Section 2", "Section 2", [paragraph1, paragraph2], false)
const section3 = new Section("section3", "Section 3", "Section 3", [paragraph1, paragraph2], false)
const section4 = new Section("section4", "Section 4", "Section 4", [paragraph1, paragraph2], false)
 
// Create an array with all the sections that are supposedly fetched from a database
const contentSections = [section1, section2, section3]

// Add every section as well as it's anchor in the navigation bar
for (let section of contentSections){
    main.appendChild(section.createContentSection())
    section.createAnchorInNavbar()
}





















































































































/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


