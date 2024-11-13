This examination is worth 1 credit (1hp) and will test the following objective:
- create web pages using html and css

### Deadline and submission
* Deadline: 2019-09-21 12.00
* Submit: Submit your assignment by doing a release on GitHub named "v1.0". In case of changes after a released version please use incremental version numbers, i.e. "v1.1", "v1.22 etc.
* OBS! **You must commit all your code to GitHub** (not using some upload form) and make sure that your web site is visible through your *public* URL like https://1dv525.github.io/xx222xx-examination-1/ where xx222xx is your username at LNU. Follow [this guide](https://coursepress.lnu.se/kurs/introduction-to-web-programming/github-pages/) to see how.

### Preparation
Make sure you have gone through the [getting stated guide](https://coursepress.lnu.se/kurs/introduction-to-web-programming/getting-started/) and have all the necessary tools installed and have done all registrations.

## Practical assignment
The idea of this practical assignment is that you will create a web site containing a couple of web pages. The first part is about structuring the site with HTML, in later part you will style your pages with CSS.

You are free to use tools like static site generators as [Jekyll](https://jekyllrb.com/) and CSS Preprocessors like [Sass](http://sass-lang.com/) if you want but this is only recommended for students that has used HTML and CSS before the course.

## Part 1 - HTML and structure
In this part we are going to start working with HTML and structure our web site

The web site should at least contain one landing page (start page) and three (3) sub pages. You should be able to click around the site trough a menu that is always present on every page. See image 1.1 below.

The minimum subpages should be:

* About- This page should contain some text about your self (if you want - a fictional person). This page should contain at least:
  * One ordered list (maybe list favorite movies, songs or things like that)
  * One unordered list
  * One image (relative URL to the image)
  * One playable video element (find one on the net and use an external URL)
* Blog/news - This page should contain at least two blog posts build by using [the "new" HTML5 tags](http://www.htmlgoodies.com/tutorials/html5/new-tags-in-html5.html)
* Contact - This page should contain a correct HTML form supporting HTTP POST method. For more information se image 1.2 below. There are no requirement that the form works since we haven't got a backend. We want you just to make it in HTML.

* All sub pages should be available through a menu that should be present in every page.
For more information see image 1.1 below.

![image 1.1](https://github.com/1dv525/syllabus/raw/master/examination/images/structure.png)

IMAGE 1.1 - Structure of the web site


![image 1.2](https://github.com/1dv525/syllabus/raw/master/examination/images/contactform.png)

IMAGE 1.2 - The contact form

### Think about
* Make sure you structure or files and folders in a good way. Maybe one folder for images, one for pages, one for stylesheets and so on...
* Think of the semantic meaning of the page elements and their order


## Part 2 - CSS
Now it is time to style your HTML pages. All CSS should be in separate files and be linked into the document. The web site layout should be like image 2.1, a simple three-column layout. You are free to choose colors and text font but you should put some time and love into the design.

![Image 2.1](https://github.com/1dv525/syllabus/raw/master/examination/images/layout.png)

IMAGE 2.1


### Some more requirements

* All pages should have a link to the CSS rules to get a consistent feeling.
* All pages content should be centered when you resize your web browser window.
* The links (at least in the menu) should have some hover effect (feel free to experiment)
* Use CSS to include at least one background image


## Part 3 - other stuff
* You should use open graph for easy sharing on social media. You should at least use "title", "url", "type" and "image". You can check if it is working by sharing your site on for instance Facebook or Twitter. You should use open graph for easy sharing on social media. You can check if it is working by sharing your site on for instance Facebook or Twitter.
* Learn about and create a robots.txt for your site. The contact page should not be indexed by search engines
* Learn about and create a humans.txt for your site

## Part 4 - Posts
On your site you should have some kind of blog/news articles (a minimum of four). Make sure to structure thoose so it is easy to add articles (by editing the html). 
In thoose articles you are supposed to reflect around the following subjects. One article per subject.
* What is robots.txt and how have you configure it for your site?
* What is humans.txt and how have you configure it for your site?
* What is Open Graph and how do you make use of it on your site?
* Why is it important to seperate the layout and design (css) from content (html)?

## Examination
The first examination assignment will not have an oral hearing. We will look at the code and give you feedback using Issues in Github. Make sure to check for comments on github.
