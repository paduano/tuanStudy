var QUESTIONNAIRE_PAGES = [

    //-------------------------------------
    //

    {
        id : 'cardinality01',
        type : 'task',
        mode : 'dropdown',
        images  : {cat01 : 'tasks/bubble01.png',cat02 : 'tasks/lineset01.png',cat03 : 'tasks/branchingsets01.png'},
        hideImage : true,
        title : "Which color contains more nodes",
        options : ["orange","red","blue","green", "Impossible to say"],
        answer : "orange"
    },

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
        mode : 'single',
        images  : {cat01 : 'tasks/bubble01.png',cat02 : 'tasks/lineset01.png',cat03 : 'tasks/branchingsets01.png'},
        hideImage : true,
        title : "Which color contains more nodes",
        options : ["orange","red","blue","green", "Impossible to say"],
        answer : "orange"
    },

    {
        id : 'cardinality02',
        type : 'task',
        mode : 'single',
        images  : {cat02 : 'tasks/bubble02.png',cat03 : 'tasks/lineset02.png',cat01 : 'tasks/branchingsets02.png'},
        hideImage : true,
        title : "Which color contains more nodes",
        options : ["orange","red","blue","green", "Impossible to say"],
        answer : "red"
    },

    {
        id : 'cardinality03',
        type : 'task',
        mode : 'single',
        images  : {cat03 : 'tasks/bubble03.png',cat01 : 'tasks/lineset03.png',cat02 : 'tasks/branchingsets03.png'},
        hideImage : true,
        title : "Which color contains more nodes",
        options : ["orange","red","blue","green", "Impossible to say"],
        answer : "orange"
    },


    //-------------------------------------


    {
        id : 'membership01',
        type : 'task',
        mode : 'multi',
        images  : {cat01 : 'tasks/bubble01.png',cat02 : 'tasks/lineset01.png',cat03 : 'tasks/branchingsets01.png'},
        hideImage : true,
        title : "Which nodes belongs to  <b>orange</b>",
        //title : "How many nodes belongs to  <b>orange</b>",
        //options : ["1","2","3","5","6","7","8","9","10","11","12","13","14","15"],
        //answer: "8"
        options : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q", "Impossible to say"],
        answer : ["M","D","I","L","J","P","B","N"]
    },

    {
        id : 'membership02',
        type : 'task',
        mode : 'single',
        images  : {cat02 : 'tasks/bubble02.png',cat03 : 'tasks/lineset02.png',cat01 : 'tasks/branchingsets02.png'},
        hideImage : true,
        title : "How many nodes belongs to  <b>blue</b>",
        options : ["1","2","3","5","6","7","8","9","10","11","12","13","14","15"],
        answer: "8"
        //options : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "Impossible to say"],
        //answer : ["A","B","C","D","E","I","Q","K"]
    },

    {
        id : 'membership03',
        type : 'task',
        mode : 'single',
        images  : {cat03 : 'tasks/bubble03.png',cat01 : 'tasks/lineset03.png',cat02 : 'tasks/branchingsets03.png'},
        hideImage : true,
        title : "How many nodes belongs to  <b>orange</b>",
        options : ["1","2","3","5","6","7","8","9","10","11","12","13","14","15"],
        answer: "11"
        //options : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "Impossible to say"],
        //answer : ["H","E","Q","R","P","D","K","L","O","M","N"]
    },


    //-------------------------------------

        {
            id : 'intersection01',
            type : 'task',
            mode : 'multi',
            images  : {cat01 : 'tasks/bubble01.png',cat02 : 'tasks/lineset01.png',cat03 : 'tasks/branchingsets01.png'},
            hideImage : true,
            title : "Which nodes belongs to both <b>orange</b> and <b>blue</b>",
            options : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q", "Impossible to say"],
            answer : ["D","P"]
        },

        {
            id : 'intersection02',
            type : 'task',
            mode : 'multi',
            images  : {cat02 : 'tasks/bubble02.png',cat03 : 'tasks/lineset02.png',cat01 : 'tasks/branchingsets02.png'},
            hideImage : true,
            title : "Which nodes belongs to both <b>orange</b> and <b>green</b>",
            options : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "Impossible to say"],
            answer : ["I","J"]
        },

        {
            id : 'intersection03',
            type : 'task',
            mode : 'multi',
            images  : {cat03 : 'tasks/bubble03.png',cat01 : 'tasks/lineset03.png',cat02 : 'tasks/branchingsets03.png'},
            hideImage : true,
            title : "Which nodes belongs to both <b>blue</b> and <b>red</b> but <b>not</b> to <b>orange</b> ",
            options : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "Impossible to say"],
            answer : ["F","J"]
        },


    //-------------------------------------

        {
            id : 'node-memberships01',
            type : 'task',
            mode : 'multi',
            images  : {cat01 : 'tasks/bubble01.png',cat02 : 'tasks/lineset01.png',cat03 : 'tasks/branchingsets01.png'},
            hideImage : true,
            title : "Which nodes belongs to <b>exactly</b> 3 colors",
            options : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q", "Impossible to say"],
            answer : ["D","L"]
        },

        {
            id : 'node-memberships02',
            type : 'task',
            mode : 'multi',
            images  : {cat02 : 'tasks/bubble02.png',cat03 : 'tasks/lineset02.png',cat01 : 'tasks/branchingsets02.png'},
            hideImage : true,
            title : "Which nodes belongs to <b>exactly</b> 3 colors",
            options : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "Impossible to say"],
            answer : ["Q","J"]
        },

        {
            id : 'node-memberships03',
            type : 'task',
            mode : 'multi',
            images  : {cat03 : 'tasks/bubble03.png',cat01 : 'tasks/lineset03.png',cat02 : 'tasks/branchingsets03.png'},
            hideImage : true,
            title : "Which nodes belongs to <b>exactly</b> 1 colors",
            options : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "Impossible to say"],
            answer : ["A","B","D","H"]
        },

    //-----COMPARE--------------------------------


    {
        id : 'compare01-B',
        type : 'task',
        mode : 'multi',
        images  : {cat01 : 'tasks/compare01-A.png',cat02 : 'tasks/compare01-B.png',cat03 : 'tasks/compare01-A.png'},
        hideImage : true,
        title : "Which nodes belongs to <b>orange</b> but not to <b>blue</b>",
        options : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q", "Impossible to say"],
        answer : ["I","H"]
    },

    {
        id : 'compare01-B',
        type : 'task',
        mode : 'multi',
        images  : {cat01 : 'tasks/compare02-B.png',cat02 : 'tasks/compare02-A.png', cat03 : 'tasks/compare02-B.png'},
        hideImage : true,
        title : "Which links belongs to <b>orange</b> but not to <b>blue</b>",
        options : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","t","v", "Impossible to say"],
        answer: ["h","g","s"]
    },


    //-----QUALITATIVE STUDY--------------------------------

    {
        id : 'qualitative01',
        type : 'task', mode : 'single',
        images  : {cat01 : 'tasks/bubble01.png',cat02 : 'tasks/bubble02.png',cat03 : 'tasks/bubble03.png'},
        title : "How would you rate the <b>intuitivity</b> of this technique <br>" +
        "(<b>1</b>: is very difficult to understand even with an explanation, <b>5</b>: the technique does not require" +
        " any explanation)",
        options : ["1","2","3","4","5"]
    },

    {
        id : 'qualitative02',
        type : 'task', mode : 'single',
        images  : {cat01 : 'tasks/bubble01.png',cat02 : 'tasks/bubble02.png',cat03 : 'tasks/bubble03.png'},
        title : "How would you rate the representation <br>" +
        "(<b>1</b>: cluttered and messy  <b>5</b>: very clear and neat )",
        options : ["1","2","3","4","5"]
    },

    {
        id : 'qualitative01',
        type : 'task', mode : 'single',
        images  : {cat01 : 'tasks/lineset01.png',cat02 : 'tasks/lineset02.png',cat03 : 'tasks/lineset03.png'},
        title : "How would you rate the <b>intuitivity</b> of this technique <br>" +
        "(<b>1</b>: is very difficult to understand even with an explanation, <b>5</b>: the technique does not require" +
        " any explanation)",
        options : ["1","2","3","4","5"]
    },

    {
        id : 'qualitative02',
        type : 'task', mode : 'single',
        images  : {cat01 : 'tasks/lineset01.png',cat02 : 'tasks/lineset02.png',cat03 : 'tasks/lineset03.png'},
        title : "How would you rate the representation <br>" +
        "(<b>1</b>: cluttered and messy  <b>5</b>: very clear and neat )",
        options : ["1","2","3","4","5"]
    },

    {
        id : 'qualitative01',
        type : 'task', mode : 'single',
        images  : {cat01 : 'tasks/branchingsets01.png',cat02 : 'tasks/branchingsets02.png',cat03 : 'tasks/branchingsets03.png'},
        title : "How would you rate the <b>intuitivity</b> of this technique <br>" +
        "(<b>1</b>: is very difficult to understand even with an explanation, <b>5</b>: the technique does not require" +
        " any explanation)",
        options : ["1","2","3","4","5"]
    },

    {
        id : 'qualitative02',
        type : 'task', mode : 'single',
        images  : {cat01 : 'tasks/branchingsets01.png',cat02 : 'tasks/branchingsets02.png',cat03 : 'tasks/branchingsets03.png'},
        title : "How would you rate the representation <br>" +
        "(<b>1</b>: cluttered and messy  <b>5</b>: very clear and neat )",
        options : ["1","2","3","4","5"]
    },



    {type : 'full', image:'thanks.png', action: 'submit'}

    ];