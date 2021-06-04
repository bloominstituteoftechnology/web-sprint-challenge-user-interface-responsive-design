## Self-Study Questions 
### (please edit this file and write your answer below each question. In addition, you may also review these questions with your mentor)

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

1. If you were to describe semantic HTML to the next cohort of students, what would you say?
Semantic HTML is used to clearly define parts of a webpage with elements. Examples of semantic HTML are <header>,<nav>,<section>,<footer>. These tags describe the element to both developers and search engines thus making the webpages easier to read for both.

2. Name two big differences between ```display: block;``` and ```display: inline;```.
Block elements take up their own line and they take up the full width available. You can assign block elements a height and a width whereas an inline element only takes up the amount of space it needs and does not start a new line.

3. What are the 4 areas of the box model?
Content, padding, border, margin

4. While using flexbox, what axis does the following property work on: ```align-items: center```?
Align items works on the cross axis (perpendicular to the main axis).

5. Explain why git is valuable to a team of developers.
Git is very valuable because it allows multiple people to make changes to the code, keeps track of any changes and it allows changes by multiple people to be merged into one source. 

## Project Set Up

- [x] Create a forked copy of this project.
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [x] Create a new branch: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x] Push commits: git push -u origin `<firstName-lastName>`.
 
Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**

## Minimum Viable Product

Your finished project must include all of the following requirements:

### Home Page

[Review the provided design file for the home page](design-files/home.png).  Notice the navigation and header images are missing.

* [ ] Build the HTML and CSS to create the missing navigation and header.
* [ ] Link the `About` navigation item to the [about.html](about.html) page

You will also notice there are 10 boxes on the home page that need background colors.  Use this list below to correctly style each box:

* [x] box1: `teal`
* [x] box2: `gold`
* [x] box3: `cadetblue`
* [x] box4: `coral`
* [x] box5: `crimson`
* [x] box6: `forestgreen`
* [x] box7: `darkorchid`
* [x] box8: `hotpink`
* [x] box9: `indigo`
* [x] box10: `dodgerblue`

### About Page

[Review the provided design file for the about page](design-files/about.png). You have been provided the HTML wrapper, footer, and page content for the about page. Create the rest of the missing HTML and CSS to match the design file.

* [x] Copy and paste your home page navigation and header into the about page
* [x] Update the header image with the about page image
* [x] Link the `Home` navigation item back to the `index.html` page.
* [x] Build the rest of the about page layout to match the design

In your solution, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

Note: Please make sure you are using flexbox to layout your website. Floats, inline-block, tables, etc, should not be used for layout. 

## Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

* [ ] refactor your HTML, make sure it's indented properly, clean, readable, you have written appropriate comments where necessary and that all attributes (required and encouraged) are filled out correctly.  
* [ ] Ensure your CSS is organized and readable, you've seperated your code by section and that you are using descriptive class names and adding classes in your HTML where styles repeat rather than rewrting the same styles over again
* [ ] Use a flex item property of your choice when laying out a section of your website, ensure you can explain how and why you've used this property 
