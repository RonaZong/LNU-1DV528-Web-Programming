<!--
A01 - Build a website
===========================
-->

You will build a website, or at least some essential parts of it. This will show that you can manage HTML, CSS, JavaScript and manage to use the techniques together when building a website.



Grading
------------------------

This assignment is graded as Fail (U) or Pass (G) and it is worth 1 credit/hp.



Preconditions
------------------------

You have completed  [A00 – Create a report page](https://coursepress.lnu.se/kurs/introduction-to-web-programming/part-0-introduction-and-prepare/a00-create-a-report-page/).

You have basic knowledge in HTML and CSS.

You have basic knowledge in JavaScript.

You have access to the course environment on GitLab.



Prepare
------------------------

There are no specific tasks to prepare yourself.

<!--
You will work in your report site and extend it. Som you might want to review your code in it, before you start. Perhaps you want to do some improvements, before you continue with this assignment?
-->



Requirements
------------------------



### Startup

These are the requirements to fullfill the assignment.

1. You have a git repo on GitLab named "a01-website", available below your lnu student acronym in the course at GitLab. Start of by cloning the repo to your computer ("xxx" is your lnu-username):

```
# Using ssh
git clone git@gitlab.lnu.se:1dv525/student/xxx/a01-website.git
```

1. The repo has a `README.md` written in Markdown, open it up and add text describing the assignment and add a url to the page on CoursePress that formulates the requirements for the assignment. Do also add a representative image for the assignment.

1. Create a directory `web/`, here you shall save all your resources for the website.

1. Save the images in the directory `web/img/`. Use only low caps, to avoid mixing caps and getting into trouble on Mac/Unix.

1. Save your stylesheets in the directory `web/css/`.

1. Create a favicon image and use it on all pages.



### HTML & CSS

These requirements are mainly related to HTML anc CSS constructs.



#### Stylesheet `css/style.css`

1. Prepare the file `css/style.css` to contain style for the website.

1. Add a comment at the top of the file and add your name and write "A01".



#### Page `page.html`

1. Add a page `page.html`. It should contain four sections/divs, a header, a navbar, a main with an article and a footer.

1. The site header should contain a image, a site title and another site subtitle or slogan of your site.

1. The navbar can be its own section, or included into the header section, your choice. Add a navbar and prepare it to be used to navigate through all the pages on this website.

1. Add a main section with an article containing a h1 and paragraphs and an image within a figure element. You may take a copy of the content of your report page.

1. At the bottom om main, add an article footer containing a byline of your self. It should contain an image and some text about yourself (or the imaginary auther) and add a border around it.

1. Add a site footer that contains a copyright notice with your name and email. Add a url to the CoursePress course webpage to your footer.

1. Add a HTML comment at the bottom of the page, just add "My comment" into it.

1. Add style to your header, navbar and footer. Make it look good.

1. Add style to the figure/img element, add a border around it and make it float right (or left) and wrap the text around it.



#### Page `image.html`

This is to play around with background images.

1. Add a page `image.html`. It should contain the same structure as `page.html`, including the site header/footer, navbar and en empty main.

1. Add a background image to the page, it should cover the whole background of the browser.

1. Add a new section/div below your header/navbar, call if "flash" and let it stretch the whole <s>browser</s> width and let it contain a representative image. (it is enough to stretch the width of your site, it might be a bit harder to stretch the browser width since it enforces you to have a certain HTML structure to support that)

1. Add another image to the background of the main section. Add some text ontop of it.



#### Normalize and typography

1. Add a page `typography.html`. It should contain the same basic structure as `page.html`, including the site header/footer, navbar and en empty main.

1. Into main, add the <a href="https://gitlab.lnu.se/1dv525/template/a01-website/-/blob/master/example/typography.html">content from the following page</a>. It is examples on a lot of typographic elements.

1. Add another stylesheet from [Normalize.css](https://necolas.github.io/normalize.css/) to normalize your style between different browsers. (just download the stylesheet, you do not need to use npm to install it)

1. Work with your own stylesheet to update it regarding the textelement on your page. Update the style to get your own personlized look of the text. Change the style for 5 (or more) items in the text. The style does not need to be "nice" or "good", just change it and feel free to play around with style and textelements.

1. Update the style to use one fontfamily for h1-h6 and one font-family for the body text.




#### Form

1. Add a page `form.html`. It should contain the same basic structure as `page.html`, including the site header/footer, navbar and en empty main.

1. Add a HTML form to the main. Create an imaginary form where you should submit your credit card details including name, amount to be drawn from the card, type of card, card number, validity and include a submit button.

1. Use CSS to style the form to make it look good.



#### Table

1. Add a page `table.html`. It should contain the same basic structure as `page.html`, including the site header/footer, navbar and en empty main.

1. Add a HTML table to the main. It should have a header row and at least 5 rows with content, each row should have at least 3 columns of data.

1. Add style to the table so that the style is different on the even and the odd rows in the table. For example, change the background color of each second row in the table.



#### Two column layout `column2.html`

1. Add a page `column2.html`. It should contain the same structure as `page.html`, including the site header/footer, navbar and en empty main.

1. Make the main part look like a two column layout by adding an aside to the left or to the right.

1. Fill the main with some content (copy any suitable text you have available).

1. In the aside, add a block with an header "Related" and a list of links to course related stuff.

1. In the aside, add another block "Todays weather" and add a paragraph with text bout the weather.



#### Three column layout `column3.html`

1. Add a page `column3.html`. It should contain the same structure and content  as `column2.html`.

1. Add another column/aside to make the page be a three column layout. Add an image to it.

1. It should be very visible that there are three columns and the main/center column should be the widest column.



#### Site footer triptych

1. Add a triptych (three equal sections on one row) and put it right next to the site footer. You can add it below or above, your choice. See to it that the `column3.html` has it and feel free to add it to all other pages (recommended).

1. In one of the triptychs you should add links to MDN reference manual for HTML, CSS and the W3C Cheetsheat (use a HTML list element).

1. In one triptych you can add links to the HTML, CSS and Unicorn validator, using a list.

1. At the last triptych, add links to the W3C standard for HTML and CSS.



#### Navbar

1. You should be able to navigate through all pages by clicking on the links in the navbar.



#### Mobile responsive

1. Add a page `responsive.html` by taking a copy of your page `column3.html`.

1. Use CSS to make it responsive using media queries by adapting the width and/or visibility of the three columns when the browser width changes. Show that you can use media queries for that.

1. You might also want to write media queries for the footer triptych, the header and the navbar. Feel free to add those.



### JavaScript

<!-- task with form, submit button, enter creditcard and validate it -->

1. Add a page `javascript.html`.

1. Add your JavaScript code into one file `js/main.js` and include it into the web page. You may create more JavaScript files if needed if you feel a need to separate your code into different files.

1. With JavaScript, create an array with a wordlist with the words of your choice, use at least twenty words.

1. The web page should contain a button (and some instructions in text). When you press the button a randomized word, from the wordlist, should be displayed in the web page.

1. Show the word in upper case and in lower case, show how many characters the word has and count the number of vowels and consonants in the word.

1. Add an input field where the user can write a character that is read when the button is pressed. Check if the character is within the word and then show YES/NO to the user. It is a bit of a guessing game, the user guesses a character, you randomize a word and checks if the character is within that word and displays it to the user.

1. The character may exist in more than one place in the word (intelligent has two i:s in it) so do also display how many hits the character has and their position in the string.

1. Do organise your code in functions.



Requirements (extra)
------------------------

Do these if you have the will, time and energy. They may enhance your learning of the course topics.

1. In `typography.html`, try to use an external font for your textlements and your headlines. [Google Fonts](https://fonts.google.com/) has some to choose from.

<!--
There are no extra requirements.
-->



Submission
------------------------

<!--
* Add validators
* Add less/sass compiler
-->

This is how to submit this assignment.

1. Update your report-repo and the page `web/report.html` and answer the following questions. Write freely with 15 to 30 sentences of text.

    1. Did you know and had used HTML and CSS before this assignment?

    1. Brifly exaplain, with your own words, about HTML to a person who have never heard of it before.

    1. Brifly exaplain, with your own words, about CSS to a person who have never heard of it before.

    1. Elaborate on the importance of keeping HTML (markup and content) and CSS (style and layout) as two separate items. Is it important and in that case why? Can it be completely separated or do they smoehow depend on eachother?

    1. What is your first impression of JavaScript as a programming language?

    1. Can you compare JavaScript as a programming language with other languages you know. Do you see equalities and differences?

    1. What is your opinion about the popularity of JavaScript? Can you see why it became popular or do you think that its popularity is overestimated? In your humble opinion?

    1. Describe how you opted to organise your JavaScript code in the assignment.

    1. What is your TIL for this course part?

1. Add a tag `v1.0.0` to your repo (both A00 and A01). If you make updates then add another tag like `v1.0.1` or `v1.1.0` and so on.

1. Ensure you have committed and pushed all your changes, including the tags, to GitLab (for both repos).

1. Add an issue to the assignmentrepo if you have any question to the teacher. The teacher will check your issues during grading the assignment.
