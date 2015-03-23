function StoryManager() {

    var self = {};

    var frontPage,backPage,titlePage,vizPage,sidePage;

    var answers = [];

    var currentPage,
        currentPageNumber = 0,
        currentTaskNumber = 0;


    var questionTime;

    var userId =  "user" + parseInt(Math.random() * 100000);



    self.pages = QUESTIONNAIRE_PAGES;


    self.nextPage = function () {

        currentPage = self.pages[currentPageNumber];


        //submit at the last slide
        if(currentPage.action === 'submit'){
            submitResults();
            console.log("results submitted");
        } else if(currentPageNumber == self.pages.length){
            //END PRESENTATION
            return;
        }


        if(currentPage.type === 'full'){
            displayFullPage(currentPage.image);
        } else if(currentPage.type === 'task'){
            displayTaskPage(currentPage, {deactivateButtons: false, hideImage : currentPage.hideImage});
        } else if(currentPage.type === 'intro-task'){
            displayTaskPage(currentPage, {deactivateButtons: true});
        }

        currentPageNumber += 1;
    };


    var displayFullPage = function (imgUrl) {
        frontPage.html("");
        frontPage.css("background-image", "url(res/"+ imgUrl + ")");

        frontPage.show();
        backPage.hide();
    };

    var displayTaskPage = function (page, params) {
        currentTaskNumber++;
        frontPage.hide();
        backPage.show();



        titlePage.html('').append('<p class="question-text">'+ currentTaskNumber + " - " + page.title +'<p>');
        $(".question-text").hide().fadeIn();

        var list = d3.selectAll(sidePage.toArray()).html('')
            .append('div')
            .classed('options-list', true);

        if(page.mode == 'single' || page.mode == 'multi'){
            list.selectAll('.option').data(page.options).enter()
                .append('div')
                .text(function (d) {
                    return d;
                })
                .classed('option', true)
                .style('width', function (d) {
                    if(page.options.length < 8 || d.length > 5)return '100px';
                    else return '35px';
                })
                .on('click', function (d,i) {
                    if(!params.deactivateButtons){
                        if(page.mode == 'single'){
                            d3.select(this).classed('selected', true);
                            setTimeout(function () {
                                setAnswer(d);
                                self.nextPage();
                            }, 200)
                        } else if (page.mode == 'multi'){
                            d3.select(this).classed('selected',!d3.select(this).classed('selected'))
                        }
                    }
                });
        } else if(page.mode == 'dropdown') {
            var select = list.append("select");//.on("change", change);
            var options = select.selectAll('option').data(page.options); // Data join

// Enter selection
            options.enter().append("option").text(function(d) { return d });

            d3.selectAll(sidePage.toArray())
                .append('div')
                .classed('button',true)
                .text('SUBMIT')
                .on('click', function () {
                    if(!params.deactivateButtons){
                        var selectedIndex = select.property('selectedIndex'),
                            data          = options[0][selectedIndex].__data__;
                        setAnswer(data);
                        self.nextPage();
                    }
                });
        }



        if(page.mode == 'multi'){
            d3.selectAll(sidePage.toArray())
                .append('div')
                .classed('button',true)
                .text('SUBMIT')
                .on('click', function () {
                    if(!params.deactivateButtons){
                        var answer = [];
                        d3.selectAll('.selected').each(function (d,i) {
                            answer.push(d);
                        });
                        setAnswer(answer);
                        self.nextPage();
                    }
                });
        }


        //image
        var image = d3.selectAll(vizPage.toArray()).html('').append('div')
            .classed('viz-image', true);

        var imageSrc = page.images[QUESTIONNAIRE_TYPE];

        var pageHidden = params.hideImage;

        if(params.deactivateButtons) {
            //dummy task
            image.style("background-image", "url(res/"+ imageSrc + ")")
                .on('click', function () {
                    self.nextPage();
                });
        } else {
            image.style("background-image", function () {
                if(params.hideImage){
                    return "url(res/clicktoview.png)";
                }else{
                    questionTime = new Date().getTime();
                    return "url(res/"+ imageSrc + ")";
                }
            } ).on('click', function () {
                if(pageHidden)
                    questionTime = new Date().getTime();
                image.style("background-image", "url(res/"+ imageSrc + ")");
                pageHidden = false;
            });
        }




    };

    var setAnswer = function (i) {
        var time = new Date().getTime() - questionTime;

        var correct;

        if(_.isEqual(_.sortBy(i), _.sortBy(currentPage.answer))){
            console.log('RIGHT');
            correct = true;
        } else {
            console.log('WRONG');
            correct = false;
        }

        //if(currentPage.mode === 'single'){
        //}else if(currentPage.mode === 'multi'){
        //    debugger
        //}

        answers.push({id: currentPage.id, answer: i, time: time, correct: correct});
    };

    var submitResults = function () {
        var data = {user: userId, type: QUESTIONNAIRE_TYPE, answers : answers};

        console.log(JSON.stringify(answers));

        //console.log(data);
/*
        $.ajax
        ({
            type: "POST",
            url: "http://fpadua2.people.uic.edu/branching/store.php",
            dataType: 'json',
            async: true,
            //json object to sent to the authentication url
            data: data,
            success: function (json) {
                alert("your results have been submitted");
            }

        });*/
    };


    var init = function () {
        frontPage = $('#front-page');
        backPage = $('#back-page');
        titlePage = $('#title-page');
        vizPage = $('#viz-page');
        sidePage = $('#side-page');


        frontPage.on("click", self.nextPage);
    }();


    return self;

}