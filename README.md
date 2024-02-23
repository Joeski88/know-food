<h1 align="center">KnowFood?</h1>

[View the live project here.](https://joeski88.github.io/know-food/)

A fun, light hearted educational food quiz for everyone.

<h2 align="center"><img src="assets/images/dragonfruit.jpeg"></h2>

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site and enjoy doing the quiz.
        2. As a First Time Visitor, I want to be able to easily navigate through the quiz, whilest enjoying it and maybe learning something new.
        3. As a First Time Visitor, I want the quiz to be aethetically pleasing and enjoyable to take part in.

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to beat my previous score.  
        2. As a Returning Visitor, I want to check if new questions have been added.
        3. As a Returning Visitor, I want to check the leaderboard and see my position.

    -   #### Frequent User Goals
        1. As a Frequent User, I want to see if the images and potential answers have been changed to add another level to the quiz.

-   ### Design
    -   #### Colour Scheme
        -   The three main colours used are ????. I chose these to give the site a striking view and maske the text easy to see.
    -   #### Typography
        -  ????????? Vina sans, long cang and winx made for display are the fonts used in this page. Winx made for display font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. I like it as it is a clean font and is suitable for all types of content. Vina sans is used in the website name and nav bar options as it is bold, unique and in theory, remembered. Long cang is used for small pieces of text to add a bit of flair and relaxed kind of vibe. 
    -   #### Imagery
        -   ???????Ive tried to use positive imagery throughout the site to make it visually attractive and to keep the visitor engaged. i used a scrolling gallery to really hammer home the beauty of being a single dad.


## Features

-   Responsive on all device sizes.

-   Engaging and fun quiz for all audiences.

-   Score totalling with javascript code.

-   Leaderboard to see your score compared to others

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the Social Media icons in the footer to add the float transition while being hovered over.
2. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Titillium Web' font into the style.css file which is used on all pages throughout the project.
3. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for social media tags/links.
4. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
5. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
6. [VScode:] (https://code.visualstudio.com/) 
    - Used as my IDE initially as struggled to use codeanywhere. Changed shortly after starting to gitpod.
7. [Favicon:](https://favicon.io/) 
    - Used to download favicon for each page.
8. [GitPod] (https://gitpod.io/workspaces)
    - Moved to gitpod shortly after starting project to use as my main IDE.


## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

<img src="assets/images/.jpg"><img src="assets/images/.jpg"><img src="assets/images/.jpg"><img src="assets/images/.jpg"><img src="assets/images/.jpg">

-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) 

<img src="assets/images/">

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site.

        1. Upon entering the site, users are asked if they "know food?" and will need gto click the button to start the quiz.
        2. The main quiz is clearly layed out and obviously displayed for practicallity for the user. 
        3. The questions are clearly displayed, and answers are picture buttons. the answer highlights either, green for correct or red for incorrect. 
        4. The questions are randomised from a choice of 15 questions, and the quiz is scored out of 10.
        5. At the end of the quiz, the user is given their final total score, and given an option to submit their score to the score board.

    2. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to complete the quiz easily.

        1. The button functions are simple and straight forward, and enable the user to easily finish the quiz without any issues.
        2. The pictures will be easily seen, and all (almost) the same size. 
        3. Your score total will be displayed at the end of the quiz autimatically.

    3. As a First Time Visitor, I want to take part in a fun, educational and informative food quiz. 
        1. The quiz is a fun & informative way to pass some spare time. 
        2. The user will be greeted with colourful images, some fun & silly answers that will hopefully make people smile.

-   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to have the opportunity to beat my score. 

        1. The quiz is abled to be played over and over again. There is a button at the end of the quiz to "play again" which ensures the user is sent to the start of the quiz.

    2. As a Returning Visitor, I want to check if new questions have been added.
        
        1.  This content would be refreshed and recycled regularly. With new quiz questions, and new and changing pictures for existing questions.
        

    3. As a Returning Visitor, I want to check the leaderboard and see my position.
        1.  At the end of the quiz the score is displayed clearly, there will be a score board for users to compare their scores to others.

-   #### Frequent User Goals

    1. As a Frequent User, I want to see if the images and potential answers have been changed to add another level to the quiz.

        1. The user would already be comfortable with the website layout and can easily navigate their way through the site to enojoy the quiz as many times as they want to.
        2. Because the user is a frequent user, they will quickly see if there are new questions and pictures updated on the quiz. This will be a future feature, as i have only done a starting stock of 15 questions (45 different pictures).

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone13, iPhone14 & iPhone15 and galaxy fold.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience       issues.

### Known Bugs

-   JavaScript code not displaying total score at the end of quiz. FIXED!!! - was using " ' " instead of " ` ".
-   Background image not covering whole screen. FIXED!!! - body was pushing image out of place.
-   While trying to randomise the questions in javascript, the code randomised how many questions were asked and your score, rather than asking 10 random questions. NOT FIXED!!!
-   Some questions dont fit onto the page and are cut off at the top. NOT FIXED!!!
-  Favicon not appearing. FIXED!!! needed to clear cache and hard refresh.

### Future Features

-   Continue adding picture questions to the pool of questions. continue randomising. 
-   Add question categories for example; regional food, meat and fish butchary, vegetables, food seasons etc.
-   Change the pictures of the existing questions to add some more variation and aid revisitability.

## Deployment

The site has been deployed to be hosted on GitHub pages. (please see the live link above). Below are the deployment instructions:

1. On GitHub, navigate to the repository you wish to deploy from.
2. Under your repository name, click Settings.
3. Navigate to the GitHub Pages section.
4. Use the Select source drop-down menu to select master branch.
5. Click Save

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository]( https://joeski88.github.io/know-food/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link]( https://joeski88.github.io/know-food/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Joeski88/know-food.git)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository] (https://github.com/Joeski88/know-food.git)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/joeski88/know-food
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/Joeski88/know-food.git
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

1. Microsoft paint, to adjust the photos in the home page gallery to all be the right size.

### Code

1. Codeanywhere.
2. github.
3. VS Code.

### Content

-   The content is a mixture of the developers own content, You Tube videos, and various links, listed below;
    1. https://www.gingerbread.org.uk/
    2. https://www.dadshouse.org.uk/
    3. https://www.workingdads.co.uk/

### Media

-   All images were found via searches on google images.

### Acknowledgements

1. Matt Purchase at learning people, has been there for me throughout the course so far and has been a great help and calming presence.
2. Gareth Mcgirr my mentor, deserves alot of thanks, as i required quite alot of help and guidance along the way. He's been very patient with me.
3. https://www.w3schools.com/css/default.asp very helpful link to help with code issues.
4. The help team online with code institute, always fast and have been able to help every time i called upon them.
