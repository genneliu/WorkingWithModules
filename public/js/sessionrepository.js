const sessionURL = 'sessions.json';

//store session list
let sessionList = [];


 function getSessions(){
    return new Promise(function(resolve, reject){
      var oReq = new XMLHttpRequest();
      oReq.onload = function (e) {
        //instead of resolving and sending target response, save session list
        sessionList = e.target.response;
        resolve(e.target.response);
      };
      oReq.open('GET', sessionURL, true);
      oReq.responseType = 'json';
      oReq.send();
    })
  }

  //takes list
  //export default - purpose to simplify imports
  //using import from will get this function
  export {getSessions as default, sessionURL};