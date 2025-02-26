<h1 align="center">KnowFood?</h1>

[View the live project here.](https://joeski88.github.io/know-food/)

A fun, light hearted educational food quiz for everyone.

![Mockup](/assets/docs/techsinimockup.png)

## Resubmission Summary

This is a resubmission, to combat and improve this project based on the feedback given I made several changes to the app. 
- Exported the questions into a Json file and imported them in.
- Turned the quiz into an object using the 'this' keyword. 
- Edited the styling and made the general aesthetics better and more improved.
- Added a message displayed to the player at the end of the quiz tht changes depending on their score.

During this process, as you can imagine, lots of bugs were thrown up. Here is an explanation on the biggest and main issues I came accross.
- The score was not totaling properly after all of my refactoring, The issue occurs because you are attaching the click event listener to the entire button element, which contains an <img> and <span> element. When you click on the image inside the button, e.target refers to the image, not the button.
##### Solution
Modify the selectAnswer function to ensure that the correct button element (not its child elements) is captured when clicked

- The other big issue I had was that when you finished the quiz and tried to press the play again button, it would increment in 2's, for eg; question number 1, 3, 5, 7, 9 were asked, so only 5 questions instead of 10, an then, dropped down each time you play until it just broke. This was due to multiple event listeners being called at the same time. After much head scratching, eventually I managed to fix it by adding a 'this.initialised' to ensure the event listener for the Next button is only added once. Also, removed the extra increment of any “question number” inside the click handler. I already rely on this.currentQuestionIndex, so I increment that once in handleNextButton().
In short, Javascript let's you keep adding event listeners as much as you want, so there are two click events on the next after the first round etc., hence why it was jumping through the questions.

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site and enjoy doing the quiz.
        2. As a First Time Visitor, I want to be able to easily navigate through the quiz, whilest enjoying it and maybe learning something new.
        3. As a First Time Visitor, I want the quiz to be aethetically pleasing and enjoyable to take part in.

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to beat my previous score.  
        2. As a Returning Visitor, I want to check if new questions have been added.
        3. As a Returning Visitor, I want to check the leaderboard and see my position (future feature).

    -   #### Frequent User Goals
        1. As a Frequent User, I want to see if the images and potential answers have been changed to add another level to the quiz.

-   ### Design
    -   #### Colour Scheme
        -   The three main colours used are Dark green, lighter grassy green and white. I chose these to give the site a striking view and make the text easy to see.
    -   #### Typography
        -  Used the standard font 'Franklin Gothic'. Looks clean and professional 
    -   #### Imagery
        -   The whole quiz is based on visual impact. Images used are bright, clear and colourful.

## Features

-   Responsive on all device sizes.

-   Inititally just picture answers are displayed until an answer is clicked, once that happens it highlights green (correct) or red (incorrect) and all the answers pop up in text form. 

-   ![function](/assets/docs/function1.png) 
-   ![function](/assets/docs/function2.png)

-   Engaging and fun quiz for all audiences.

-   Score totalling with javascript code. 
-   ![Function](/assets/docs/function3.png)

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the Social Media icons in the footer to add the float transition while being hovered over.
2. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for social media tags/links.
3. [Git:](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
4. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
5. [VScode:](https://code.visualstudio.com/) 
    - Used as my IDE initially as struggled to use codeanywhere. Changed shortly after, switching to gitpod.
6. [Favicon:](https://favicon.io/) 
    - Used to download favicon for each page.
7. [GitPod:](https://gitpod.io/workspaces)
    - Moved to gitpod shortly after starting project to use as my main IDE.
8. [Json:](https://www.json.org/json-en.html)
    - Used to store the quiz questions for the app.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

![W3C Markup Validator](https://validator.w3.org/)
![Validator screenshots](/assets/docs/htmlscreenshot1.png)
![Validator screenshots](/assets/docs/htmlscreenshot2.png)
![W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) 
![Validator screenshots](/assets/docs/cssval.png)

![JavaScript Validator](https://jshint.com/)
![JS screenshots](/assets/docs/jsval1.png)
![JS screenshots](/assets/docs/jsval2.png)

#### All pages have been revalidated, and all passed after resubmission work.

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site.

        1. Upon entering the site, users are asked if they "know food?" and will need gto click the button to start the quiz.
        2. The main quiz is clearly layed out and obviously displayed for practicallity for the user. 
        3. The questions are clearly displayed, and answers are picture buttons. the answer highlights either, green for correct or red for incorrect. 
        4. The questions are randomised from a choice of 15 questions, and the quiz is scored out of 10.
        5. At the end of the quiz, the user is given their final total score.

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
        1.  At the end of the quiz the score is displayed clearly, there will be a score board for users to compare their scores to others. This will be a future feature.

-   #### Frequent User Goals

    1. As a Frequent User, I want to see if the images and potential answers have been changed to add another level to the quiz.

        1. The user would already be comfortable with the website layout and can easily navigate their way through the site to enojoy the quiz as many times as they want to.
        2. Because the user is a frequent user, they will quickly see if there are new questions and pictures updated on the quiz. This will be a future feature, as i have only done a starting stock of 15 questions (45 different pictures).

### Further Testing

- The Website was tested on Google Chrome, Microsoft Edge and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Laptop, iPhone13, iPhone14 & iPhone15 and galaxy fold.
- A large amount of testing was done to ensure that all pages were linking correctly.
- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs

- JavaScript code not displaying total score at the end of quiz. FIXED!!! - was using " ' " instead of " ` ".
- Background image not covering whole screen. FIXED!!! - body was pushing image out of place.
- While trying to randomise the questions in javascript, the code randomised how many questions were asked and your score, rather than asking 10 random questions. FIXED!!!
- Some questions dont fit onto the page and are cut off at the top. FIXED!!! used flex boxes to dictate layout.
- Favicon not appearing. FIXED!!! needed to clear cache and hard refresh.
- The quiz was not looping, and the play again button was not functioning. FIXED!!! when editing the javascript to randomise the questions asked I missed out changing         
   "currentQuestionNumber" to "currentQuestionIndex" 
- Orange bar at the bottom of the page on mobile screens. FIXED!!! added 100vh in height to the body.
- Start quiz button stopped working day before submission. FIXED!!! forgot to wrap the button class in index.html page with a closing "</a>" after the "<h1>". 
- App background turns the whole page red once clicked in a small specific area. FIXED!!! Removed "parentNode" from line 429, fixed bug instantly.
- Data not being pulled from json file. FIXED!! file path was incorrect.
- Red background appears when certain area is clicked
- ![Screenshot](/assets/docs/redbkgrndbug.png)

### Future Features

-   Continue adding picture questions to the pool of questions. continue randomising. 
-   Add question categories for example; regional food, meat and fish butchary, vegetables, food seasons etc.
-   Change the pictures of the existing questions to add some more variation and aid revisitability.
-   Add a leaderboard, and make the score of your answer higher or lower depending on the difficulty of the question.
-   Add a timer to each question, that times out once finished and moves automatically onto the next question.

## Deployment

The site has been deployed to be hosted on GitHub pages. (please see the live link above). Below are the deployment instructions:

1. On GitHub, navigate to the repository you wish to deploy from.
2. Under your repository name, click Settings.
3. Navigate to the GitHub Pages section.
4. Use the Select source drop-down menu to select main branch.
5. Click Save

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the ![GitHub Repository](https://joeski88.github.io/know-food/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site ![link](https://joeski88.github.io/know-food/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the ![GitHub Repository](https://github.com/Joeski88/know-food.git)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the ![GitHub Repository](https://github.com/Joeski88/know-food.git)
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

Click ![Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

1. Microsoft paint, to adjust the photos in the home page gallery.

### Code

1. Codeanywhere(at the very start).
2. github.
3. VS Code.

### Content

-   The picture content is taken from google image search;

Dragon fruit question

1.	https://health.clevelandclinic.org/ jackfruit
2.	https://www.foodrepublic.com/ passion fruit
3.	https://www.shutterstock.com/search/%E0%B9%80%E0%B8%87%E0%B8%B2%E0%B8%B0?consentChanged=true rambutan
4.	https://health.clevelandclinic.org/what-is-jackfruit-and-is-it-healthy kiwi
5.	https://www.bhg.com/how-to-grow-dragon-fruit-from-seed-7371642 dragon fruit

Scotch bonnet question

1.	https://www.aglugofoil.com/2021/07/padron-peppers-tapas-recipe.html padrons
2.	https://vegboxfresh.co.uk/products/scotch-bonnet-chilli-peppers scotch bonnet
3.	https://www.chilipeppermadness.com/chili-pepper-types/sweet-mild-chili-peppers/sweet-bell-peppers/ 
4.	https://www.finefoodspecialist.co.uk/romano-red-pepper-1kg?gad_source=1&gclid=Cj0KCQiAoKeuBhCoARIsAB4Wxtec2c7KWTVmlMFSd2b_iL6i40lp45NIunsabM5zJdhdZ9tplzTuFLMaAoq4EALw_wcB 

All spice question

1.	https://justingredients.co.uk/products/juniper-berries?variant=32208724557902&gad_source=1&gclid=Cj0KCQiAoKeuBhCoARIsAB4WxtcfSqXpwYRhjmWyQ8c3okQgCM9jSew47a3gGFNBQvw8pzAu4WfD6GsaAsvHEALw_wcB 
2.	https://www.amazon.co.uk/Cloves-Spice-Organic-Whole-Clove/dp/B07NTNSQ6K/ref=asc_df_B07NTNSQ6K/?tag=googshopuk-21&linkCode=df0&hvadid=463168682794&hvpos=&hvnetw=g&hvrand=13169245867179536525&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9045999&hvtargid=pla-1154335752672&mcid=e3b2e626fea83501949b9cab7368ae61&th=1 
3.	https://www.amazon.co.uk/Crazee-Deal-STAR-ANISE-WHOLE/dp/B09PHS2WBC/ref=asc_df_B09PHS2WBC/?tag=googshopuk-21&linkCode=df0&hvadid=606949364583&hvpos=&hvnetw=g&hvrand=17222850405076562625&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9045999&hvtargid=pla-1742558580194&psc=1&mcid=bfd065135a6639b1ad3f89746963a9ef 
4.	https://www.worldofspice.co.uk/blog/what-is-the-difference-between-mixed-spice-and-allspice/ 
5.	https://www.bbcgoodfood.com/howto/guide/health-benefits-cinnamon 

Pasta question

1.	https://www.nonnabox.com/types-of-pasta/ (for all pictures)

Cornish yarg question

1.	https://www.ebay.co.uk/itm/370342172094 muslin cloth
2.	https://www.picturethisai.com/wiki/Rumex_obtusifolius.html dock leaf
3.	https://www.britannica.com/plant/hemp hemp leaf
4.	https://www.saps.org.uk/teaching-resources/resources/869/investigating-leaf-adaptations-why-do-nettles-sting/ nettle leaf
5.	https://www.binbags.com/black-refuse-sacks-black-bin-bags/  bin bag

Tomahawk question

1.	https://www.thecornishfoodboxcompany.co.uk/christmas-food-drink/pork-beef-lamb/gammon-joints/cornish-free-range-belly-pork-slab-medium-2kg.html?utm_campaign=performance_max&utm_medium=cpc&utm_source=google&utm_term=&utm_campaign=Sales-Performance+Max+-+All+Products&utm_source=adwords&utm_medium=ppc&hsa_acc=2305395064&hsa_cam=18956597407&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiAoKeuBhCoARIsAB4WxtfXYWJYHqNP_QbortUYJR8Oa1uZWSYyKUOxQoS9FLrmy7IoRSBTS5saAt0hEALw_wcB pork belly
2.	https://www.jpmeatsandmore.co.uk/product/barnsley-lamb-chops/ Barnsley chop
3.	https://www.eatgreatmeat.co.uk/product/osso-buco-beef-shin-on-the-bone-1kg-pack/?gad_source=1&gclid=Cj0KCQiAoKeuBhCoARIsAB4WxtfBxxpbZw-BsoJdPJQjqACToCClpOgS3EQSNjWET-b_ZeU2hDU2D5EaAvagEALw_wcB osso buco
4.	https://mytbones.com/product/t-bone-steak/ tbone
5.	https://www.farmandfork.co.uk/product/28-day-dry-aged-tomahawk-steak/ tomahawk

Saffron flower question

1.	https://www.gardenersworld.com/plants/crocus-sativus/ Saffron
2.	https://www.bhg.com/gardening/flowers/bulbs/alliums-for-your-garden/ Allum
3.	https://eu.goupstate.com/story/lifestyle/home-garden/2019/09/25/betty-montgomery-spider-lilies-add-right-touch-to-fall-gardens/2700084007/ Spider Lilly
4.	https://www.gardenersbasics.com/tools/blog/how-to-grow-poppies-indoors Poppy
5.	https://weedwise.conservationdistrict.org/cemo6 Knapweed

Miso question

1.	https://www.sugarfit.com/blog/is-soya-bean-good-for-diabetes/ Soya Beans
2.	https://www.gourmetsweets.co.uk/products/assorted-jelly-beans?variant=44058786431188 Jelly Beans
3.	https://www.theguardian.com/food/2023/jan/18/beans-in-toast-uk-should-switch-to-broad-bean-bread-say-researchers Broad Beans
4.	https://www.limoncello.co.uk/blogs/news/exploring-the-richness-of-italian-borlotti-beans-a-true-culinary-delight Borlotti Beans
5.	https://www.stylecraze.com/articles/amazing-benefits-of-kidney-beans-for-skin-hair-and-health/ Kidney Beans

Tuber question

1.	https://www.agrivi.com/blog/farm-management-practices-for-increased-potato-tubers-yield/ Potato
2.	https://en.wikipedia.org/wiki/Cucumber Cucumber
3.	https://www.amazon.co.uk/PREMIER-SEEDS-DIRECT-Aubergine-Fingers/dp/B08X695KKB Aubergine
4.	https://parade.com/23643/lindsaylowe/what-the-heck-is-romanesco-and-how-do-you-cook-it/ Romanesco Cauliflower
5.	https://www.thekitchn.com/whats-the-difference-between-white-and-yellow-corn-233298 Corn

Langoustine question

1.	https://foodandtravel.com/food/in-season/langoustine Langoustine
2.	https://www.vecteezy.com/photo/1897646-crayfish-on-white-background Crayfish
3.	https://www.stockfood.co.uk/images/00859066-Cooked-spiny-lobster Spiny Lobster
4.	https://chefsmandala.com/archaeology-seafood-crab/ Crab
5.	https://shiki.sg/product/atlantic-wild-jumbo-prawn-langostino-super-jumbo-xl-salvaje-2kg-box-size-8-12/ Jumbo Prawn

Macadamia question

1.	https://www.exportersindia.com/product-detail/vacuum-hazelnuts-5795675.htm Hazelnut
2.	https://www.medicalnewstoday.com/articles/325000 Brazil Nut 
3.	https://balconygardenweb.com/how-to-grow-a-cashew-tree-growing-cashew-nuts/  Cashew
4.	https://www.marthastewart.com/8262975/macadamia-nuts-health-benefits-uses Macadamia
5.	https://www.britannica.com/plant/chickpea Chickpeas 

Tahini question

1.	https://zerowastebulkfoods.co.uk/products/fregola-giant-couscous-organic Fregola
2.	https://www.foodiecrush.com/creamy-polenta/ Polenta
3.	https://draxe.com/nutrition/chia-seeds-benefits-side-effects/ Chia seeds
4.	https://www.bhg.com/recipes/healthy/eating/flaxseed/ Linseeds
5.	https://www.tastingtable.com/1049109/most-of-the-worlds-sesame-seeds-come-from-this-country/ Sesame

Bearnaise question 

1.	https://www.gurneys.com/product/sage Sage
2.	https://propagationplace.co.uk/vegetable/curled-parsley/ Parsley
3.	https://www.thespicehouse.com/blogs/news/rosemary-substitute Rosemary
4.	https://recipes.net/articles/tarragon-substitute/ Tarragon
5.	https://www.kerrysfresh.co.uk/product/thyme/ Thyme

Apple question 

1.	https://nationaltoday.com/peach-blossom-day/ Peach
2.	https://boisdejasmin.com/2019/04/what-does-orange-blossom-smell-like.html Orange
3.	https://plantura.garden/uk/fruits/raspberries/raspberry-overview Raspebrry
4.	https://www.floraqueen.com/blog/apple-blossom-michigan-state-flower-fragranced-beauty Apple 
5.	https://seed2plant.in/products/cherry-blossom-live-plant Cherry

Caviar question 

1.	https://pngtree.com/freebackground/salmon-is-swimming-under-water_2649320.html Salmon
2.	https://www.keywestaquarium.com/puffer-fish Puffer Fish
3.	https://www.newsweek.com/giant-catfish-caught-fisherman-battle-1787592 Catfish 
4.	https://www.nationalfisherman.com/northeast/new-england-council-looks-to-next-monkfish-changes Monkfish
5.	https://www.iucn.org/content/sturgeon-more-critically-endangered-any-other-group-species Sturgeon

#### Quiz was dropped down to 4 options so have stopped using 1 picture from each question.

- The background pictures were also taken from google image search
1. https://stock.adobe.com/uk/search?k=%22vegetable+frame%22  - landscape background
2. https://depositphotos.com/photos/food-border.html?sh=05f3a0cdf2785450d953babb6dcb6e79b47979a0 – portrait background

- The base of the quiz was done through a youtube Account walkthrough. It was turned into a picture quiz after, therefore needing to make many changes to make the code my own. 

GreatStack you tube account video; https://www.youtube.com/watch?v=PBcqGxrr9g8&t=4s 

- Had issues centering the "enter quiz" button, used this page as help; https://www.shecodes.io/athena/9033-how-to-add-a-button-on-an-image-with-html-css#:~:text=To%20add%20some%20CSS%20and,index%20higher%20than%20the%20image.&text=Adjust%20the%20.,the%20size%20of%20your%20image. 

- Used this page to remind me about how to use flex boxes; https://css-tricks.com/snippets/css/a-guide-to-flexbox/

- Used this page to help me when trying to randomise the question output; https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array

- Used this page to help with the terminology used when programming javascript; https://developer.mozilla.org/en-US/docs/Web/JavaScript

### Media

-   All images were found via searches on google images.

### Acknowledgements

1. Page called https://developer.mozilla.org/en-US/ was very helpful with terminology.
2. https://www.w3schools.com/css/default.asp very helpful link to help with code issues.
3. https://www.canva.com/ The background image was designed on Canva. 
