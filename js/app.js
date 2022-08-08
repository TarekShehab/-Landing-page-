// get the list that we will put the anchors in
let navbarList = document.getElementById('navbar__list')

// Add all sections to the page
const main = document.querySelector('main')

// Fake paragraphs for the sections
const paragraph1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.'
const paragraph2 = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'

// function to determine if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

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

    // Adds the anchor to a section in the navigation bar
    createAnchorInNavbar(){
        const listItemElement = document.createElement('li')
        listItemElement.setAttribute('class', 'menu__link')

        const anchorElement = document.createElement('a')
        anchorElement.setAttribute('href', "#"+this.id)
        anchorElement.textContent = this.title
        // anchorElement.addEventListener('click', () => {
        //     this.isActive = true
        //     document.getElementById(this.id).setAttribute('class', 'active-section')
        // })

        listItemElement.appendChild(anchorElement)
        navbarList.appendChild(listItemElement)
    }

}

// Create an array with all the sections that are supposedly fetched from a database
const section1 = new Section('section1', 'Section 1', 'Section 1', [paragraph1, paragraph2])
const section2 = new Section('section2', 'Section 2', 'Section 2', [paragraph1, paragraph2])
const section3 = new Section('section3', 'Section 3', 'Section 3', [paragraph1, paragraph2])
const section4 = new Section('section4', 'Section 4', 'Section 4', [paragraph1, paragraph2])
// section1.isActive = true
const contentSections = [section1, section2, section3]

// Add every section as well as it's anchor in the navigation bar
for (let section of contentSections){
    
    // add the section
    const sectionHTML = section.createContentSection()
    main.appendChild(sectionHTML)
    
    // add the section anchor in the navigation bar
    section.createAnchorInNavbar()

    // add an event listener to the each section
    document.addEventListener('scroll', () => {
        if(isInViewport(sectionHTML)){
            console.log(section + "is visible!")
            section.isActive = true
            sectionHTML.setAttribute('class', 'active-section')
        }else{
            section.isActive = false
            sectionHTML.removeAttribute('class')            
        }
    })
}
