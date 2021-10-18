//iffy wont share anything outside of scope


    //have to import new js files functions    
    import getSessions, * as sessionRepository from './sessionrepository.js';
    // import * as template from './template.js';
    // import { sessionTemplate, errorMessage } from './template.js';
    //import by name, has to be same name


    function render() {
    var list = document.querySelector('#sessions');
    if (!list) return;
    list.innerHTML = template.sessionTemplate(data.listItems);
    };
    
    
    var data = {
    listItems: []
    };
    
    getSessions()
    .then((sessions)=>{
        console.log('promises!')
        data.listItems = sessions;
        render();
    });



