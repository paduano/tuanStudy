var QUESTIONNAIRE_PAGES = [

    //-------------------------------------
    //



    {type : 'full', image:'intro/welcome.png'},
    {type : 'full', image:'intro/graph01.png'},
    {type : 'full', image:'intro/bubbleset.png'},
    {type : 'full', image:'intro/linesets.png'},
    {type : 'full', image:'intro/branchingsets.png'},
    {type : 'full', image:'intro/branchingsets2.png'},
    {type : 'full', image:'intro/start01.png'},


    //-------------------------------------

    {
        id : 'cardinality01',
        type : 'task',
        mode : 'dropdown', //dropdown menu
        images  : {cat01 : 'tasks/bubble01.png'},
        hideImage : true, //whether the image should be initially hidden or not
        title : "Which color contains more nodes", //question
        options : ["orange","red","blue","green", "Impossible to say"],
        answer : "orange"
    },

    {
        id : 'cardinality01',
        type : 'task',
        mode : 'single', //single button click
        images  : {cat01 : 'tasks/bubble01.png'},
        hideImage : true, //whether the image should be initially hidden or not
        title : "Which color contains more nodes", //question
        options : ["orange","red","blue","green", "Impossible to say"],
        answer : "orange"
    },



    {type : 'full', image:'thanks.png', action: 'submit'}

    ];