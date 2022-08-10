## Landing Page

# Table of contents

- Project Files.
- Project description.
- Instructions on how to run the project.
- Technologies used.
- Author's name.

# Project Files.

### index.html

    The HTML file is almost empty as it's populated dynamically through the javascript.

### style.css

    Some minor changes were made on the style sheet to manipulate things such as:
    - Display modes.
    - text alignments.
    - Colors.
    - Elements' Opacity.

### app.js

    The file is divided into four main parts: Section class, Global variables, Functions, and finally a function call.


    - Section Class -

        This is the class that we store each section in. It has 5 attributes and 2 functions.


        • Attributes are: ID, Data, Title, Contents, and the 'isActive' boolean.


        • Functions:
            createContentSection(): creates the html that represents the section and all it's necessary functionalities.

            createAnchorInNavbar(): creates the section's anchor and adds it to the navigation bar on the page.



    - Global Variables -

        • navbarList: The Element the anchors will be appended to.
        • navbar: The Element we'll use to show/hide the navigation bar.
        • main:The element the sections will be appended to.
        • paragraph1, paragraph2: dummy strings used to create sections instances.
        • section(1, 2, 3, 4): Creating four instances of the section class.
        • sectionContents:Array of the four created sections.



    - Functions -
        • isInViewport(element): Determines Whether the element is visible in view port or not.
        • activeSectionHandle(ContentSections): Handles highlighting the active section (section in viewport).
        • onScrollStop(callback): Runs the callback method if user stops scrolling.
        • toggleNavbarHandle(): Handles toggling the navigationbar.
        • scrollToTopButtonHandle(): Handles toggling the scroll-to-top button.
        • buildApp(): builds the whole app and puts it in place in the HTML.



    - Build Call -
        Calling the build function to build the whole app.

# Project Description.

    The project is simple landin page. It's developed using HTML, CSS, and Javascript. The project is for learning purposes as a part of the Udacity professional web development nanodegree.

# Instructions on how to run the project.

To run the project, Simply open the `index.html` file in your browser, Or with your terminal through these commands:

```
cd <project's directory>
npm install
npm run dev

```

then open your browser on: `http://localhost:1234/`

# Technologies used.

- HTML
- CSs
- Javascript
- node.js
- Parcel bundler

# Author's name.

    Tarek Shehabeldin Ibrahim.
    Connect with me on LinkedIn: https://www.linkedin.com/in/tarek-shehab-381848156/
