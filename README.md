# Sprint Challenge: User Interface and Responsive Design

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a realistic project- a static site for a restaurant. During this Sprint, you studied Semantic HTML, CSS Fundamentals, CSS Flexbox Module, and Responsive Design. In your challenge this week, you will demonstrate proficiency by creating a multi page website that has some missing HTML elements as well as CSS specificity problems that need to be solved. You will also create an additional web page that will be linked to from a navigation you will build.


## Expectations

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your Sprint Challenge score is a measure of your ability to work independently using the material covered this week. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days. As such, you are not allowed to collaborate. However, how can use any external resource or documentation you need including Guided Projects, Module Projects, or Google.

Commit your code regularly and meaningfully. Check out this guide on how to make [meaningful commits](https://cbea.ms/git-commit/).

In your solution, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work. Perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a Sprint Challenge that meets MVP than one that attempts too much and does not.

**NOTE: Please make sure you are using Flexbox to layout your website. Floats, inline-block, tables, etc, should not be used for layout and will not result in a passing Sprint Challenge score.**


## Description

In this challenge, you build a missing header and footer and update some CSS styling on the home page, then create an additional menu page which will link from the navigation you created. You will also make a mobile media query for each page. See further down for more specific instructions per page.

In meeting the minimum viable product (MVP) specifications listed below, your web page should look like the solution screen shots of the home and menu pages:

[Click here for the home page example](https://i.ibb.co/SRcbcdH/home-desktop.png)

[Click here for home page mobile example](https://i.ibb.co/svmmXzn/home-mobile.png)

[Click here for the menu page example](https://i.ibb.co/NxLyLCH/menu-desktop.png)

[Click here for menu page mobile example](https://i.ibb.co/Wsc2vpz/menu-mobile.png)


## Project Set Up
​
1. Fork the repository, then clone from your fork.
2. Go into Canvas and connect your repo to CodeGrade.
4. DO NOT CREATE A BRANCH. You will be pushing your changes to the main/master today.
5. cd into your repository on the command line and use `code .` to open VS Code.
6. Open the terminal in VSC and type `npm install`. While this runs, click the split terminal icon.
7. Next type `npm run test` in one side, and use the other side for git commands or general use.
8. Download the Live Server extension from the Extensions tab on the left side of your VS Code. After it is done installing, click "Go Live" on the bottom right side of your screen to run your HTML file.
9. Complete your work making regular commits to the main branch; your CodeGrade score will update each time you make a push.
​
​
## Minimum Viable Product
​
Your finished project must include all of the following requirements:
 
​
### Responsive Design 
​
Before you jump in, take 10 minutes to review the design files. Take time to see how the home and menu pages are built. Think about the main concepts of Flexbox and how you could use rows or columns to simplify your code. A good developer will have a gameplan for both screen sizes before they type a single line of code. You could even draw on the design files or make your own simple wireframe with labels.
​
You **must** use the Google Chrome developer tools during your HTML/CSS implementation process. The tools use emulation software to "pretend" that they are actually a smaller screen; you cannot get the same effect from simply pinching your browser smaller. This will also allow you to view sizes larger than your current monitor's size, such as the standard 1920x1080px desktop width. You will not be successful with properly implementing a responsive website without using the developer tools.
​
* [ ] Desktop size should be responsive at 1920px width.
* [ ] Mobile size should be responsive at 428px width.
* [ ] Don't forget your viewport meta tag!
​
**NOTE: You may notice that your design doesn't look great between these sizes. This is totally normal; for a real product, there would be at least a tablet size intermediary design and likely several more breakpoints to improve the experience for a variety of screen sizes. If you would like to practice more, feel free to make the project look great at all sizes!**
​
*OPTIONAL / STRETCH*
* [ ] Tablet size should be responsive at 1024px width. There is no design file for this, be creative and follow the same design patterns as the other two screen sizes. :)
* [ ] Additional media queries for any incremental fixes between major sizes or to support specific popular devices, e.g. 360px, 1280px.
​
​
### Home Page
​
Review the provided design file for the home page.
​
* [X] Build the HTML and CSS to create the missing header and footer sections.
* [X] Link the h1 page title to the [index.html](index.html) page.
* [X] Link the `Menu` navigation item to the [menu.html](menu.html) page.
* [X] Create social media buttons on header for Facebook, Twitter, and Instagram with icons from [FontAwesome](https://fontawesome.com/search). *NOTE: * ENSURE that the icon name includes "facebook", "twitter", or "instagram" respectively.
* [X] Build the rest of the home page layout to match the design. Much of it has already been implemented; you should only need to fix the header, footer, and gallery portions.
​
Colors and fonts:
Light text: rgb(225, 239, 230);
Dark background: rgb(0, 4, 17);
Dark transparency: background-color: rgb(0, 4, 17, .8);
​
​
### Menu Page
​
Review the provided design files for the menu page.
​
* [X] Copy and paste your home page header and footer into the menu page.
* [X] Update the header image with the menu page image.
* [X] Use the article element for the menu and a div inside of it; change the div's class to "menu-container"
* [X] Create a container for each section (e.g. drinks or entrees) with class "menu-section"
* [X] Create a container for each item (e.g. soda or burger) with class "menu-item"
* [X] Add an H4 for every price and title of the menu, two h4 for each menu
* [X] Add a p element for every description, second line such as (v) will require it's own p
​
Colors and fonts for desktop:
Light text: rgb(225, 239, 230);
Dark background: rgb(0, 4, 17);
Dark transparency: background-color: rgb(0, 4, 17, .8);
​
Colors and fonts for mobile: 
Dark text: rgb(0, 4, 17);
Light background: rgb(225, 239, 230);
Dark borders: rgb(0, 4, 17);
​
​
### Additional Stretch Goals
* [ ] Create additional HTML and CSS for Reservations, Special Offers, and Contact pages.
* [ ] Make those additional pages responsive.
* [ ] Add animations.
* [ ] Host on Netlify.
​
​
## Extra Resources 
🦄 [Sprint Study Guide](https://bloomtech.notion.site/bloomtech/Unit-1-Sprint-3-Study-Guide-8769748b8c284f7095f6542fe24192a7)
