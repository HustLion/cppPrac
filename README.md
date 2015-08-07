# cppPrac
This repo is for my c++ practice and algorithm practice. In English and Chinese. Simply put, I use stackedit to record things I learnt and put useful things to quizlet and use online code judges to practice algorithm and C++ skills. On my way, I may gradually develop some custom apps but as a beginner I will use existing tools properly.

No I can't stand that... most of them can't not simutaneously support advanced math formulas and program syntax.. Do it myself with syntax highlighting...

Memorization Workflow: 

1. Read books and gather info 
2. write formulas with stackedit.io  -> on hold.
3. store formulas as json with json-editor. -> on hold. stackedit.io have local storage and can be exported as .md, later I just parse these well-structured markdown files and generate json data.
4. cut images manually 
5. upload to github, edit quizlet manually. [image, raw, def]
6. if conversion needed, export.

Practice  Workflow:

1. find problems in codechef or hackerrank or topcoder
2. create corresponding foler and flies, write solution locally and debug
3. paste and submit
4. record result
5. extract valuable memorization materials

To truly understand the tools I use here, need to read documentations and/or source code of them:

1. json-editor => multiline, syntax highlighting, style
2. jquery => getJSON function
3. angular.js => app structure, $scope
4. stackedit... => app structure, import/export, automatic real-time update, web storage...
5. CMake, npm, bower... => project management.

Train C++ and algorithm and math and possibly politics:
Edit memorize.com with my github backup. Do it with windows.
Try online oj. => top codder(combine arena with [problem archive](http://community.topcoder.com/tc?module=ProblemArchive))

Suggested Study Order:

* variables, data types, and numerical operators
* basic input/output
* logic ( if statements, switch statements )
* loops ( for, while, do-while )
* arrays
* pseudo random number generation
* strings & string functions
* functions
* structures/classes
* enumerated data
* file input/output
* pointers
* sorting
* linked lists
* advanced classes
* recursion

Good doc:
http://www.learncpp.com/
http://en.cppreference.com/w/cpp/keyword

Editor:
https://www.cevelop.com/
https://www.jetbrains.com/clion/quickstart/

Good posts:
http://sixrevisions.com/resources/10-puzzle-websites-to-sharpen-your-programming-skills/
http://www.coderholic.com/10-more-puzzle-websites-to-sharpen-your-programming-skills/

Good sites:
https://www.hackerrank.com
https://www.codechef.com/
http://jsoneditoronline.org/
https://github.com/marcuswestin/store.js
https://github.com/luisnaranjo733/flashcards
https://github.com/duckoteka/MathPad

http://appadvice.com/appnn
http://www.makeuseof.com/
http://www.mifengtd.cn/
http://foundation.zurb.com/



# Flashcard app => on hold, since we have Quizlet
The one that is most close to what I'm thinking: https://github.com/thormartin91/flashcard

Store json, show then with a button to toggle the content. Later add syntax highlighting and others.
json. angular. stackedit. syntax highlight. emoji. nodejs. cloud9... and all of them are browser-based.
jQueryUI, bootstrap.

Data structure:
{
    "type-setOneTime": "math or computer science or somehting",
    "title": "the face of the flashcard, can be duplicated",
    "content": "the overleaf",
    "id-auto": "for sorting or something, should be unique"
    }
    
MVC? MVVC? Not yet I guess...

Others:
https://github.com/iambrandonn/FlashCards
https://github.com/fattarsi/flashcards
https://github.com/Sinani201/RoteCards 
A facebook app, maybe a little advanced: https://github.com/chtrinh/Flashcard
A really complicated one: https://github.com/01org/webapps-flashcards

A good editor: https://stackedit.io/ with its repo: https://github.com/benweet/stackedit
http://plnkr.co/

## Develop Plan
Afer step 2, I can use this flashcard app to help with my graduate exam.

* Step 1: Write json data with editor and manually copy and save. - partially done => bug: doesn't support multiline edit.. No syntax highlighting... After clicking `new item`, doesn't generate structure according to the template.
* Step 2: Show json data in browser with the json data I wrote. - partially done => no stylying now. 
* Step 3: Show json data in browser with data fetched from my Heroku app. => refer to https://github.com/thormartin91/flashcard
* Step 4: Edit and save data to Heroku app. => refer to https://github.com/thormartin91/flashcard
* Step 5: Enable user management feature with my Heroku app.
* Step 6: Enable public and private flashcard.

TASK now (1h/day):

1. understand json-editor. redirecting to specific language details. most urgent: syntax problem. but I can write plain things for now.

2. syntax support(isolate from html tags), a little style, toggle the overleaf.

Step 1:

Better have a live preview of the math expression I type in. Could use stackedit. 
=> extend stackedit to show json data.

Step 2:
Graph drawing: https://github.com/bsekerci/json2graph
Graph drawing library for JavaScript https://github.com/anvaka/VivaGraphJS

json presenter:
https://github.com/lucasprus/json_presenter

Other options:
https://github.com/daleroy1/freeboard-table
https://github.com/benatkin/outliner.js

Just use Angular.js to create a table,,, and read from json...  Maybe this system could be extended to be used for memorizing angular.js syntax... And give a button to toggle answers.

# Math
To edit data, use: `./math/editor.html`, and click `JSON` button to view and copy and paste to a local file.

To view data, use: `./math/index.html`.

To write formulas, use: stackeditor.io

Workflow: 1. Read books and gather info -> 2. write formulas with stackedit.io-> 3. store formulas as json with json-editor -> 4. cut images manually-> 5. upload to quizlet manually.

Possible improvement:

1. direct import from existing ones?
2. maybe have my custom one?
3. enable `export` feature
4. automatically with MathJax, or even bundled with step 3 (when exporting latex formulas json file, export images too)
5. use web form autocomplete, or some API...

Most services provided by other websites don't include a powerful editor for math formulas.... For now I can generate pictures with my own and learn from their UI and utility design and develop my custom flashcard system. Well, studyblue supports latex well. Now, just edit latex and upload it (save a copy here). 

Or, use form autocomplete to extract info from my github json source and submit it to quizlet.

Latex editor and web form autocomplete. https://github.com/sharelatex/sharelatex, https://www.overleaf.com

Also Intellij Latex plugin.

Latex draw, A vector drawing editor for LaTeX, https://github.com/arnobl/latexdraw


Possible modes:

* flashcard: http://www.flashcardmachine.com, https://quizlet.com/, https://www.studyblue.com/
* matching
* and multiple-choice



Identify symbols: http://detexify.kirelabs.org/classify.html



Related posts:

http://mlworks.cn/posts/introduction-to-mathjax-and-latex-expression/
http://www.winterland.me/2013/12/hexo-mathjax/


# Credits
Flash card system built from and memorize.com
Json-editor from https://github.com/jdorn/json-editor
