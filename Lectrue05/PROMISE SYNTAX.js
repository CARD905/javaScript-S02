let myPromise = new Promise(function(myResolve,myReject){
    myPromise();
    myReject();
});
myPromise.then(
    function(value){/*code if successful */},
    function(error){/*code if some error */},
);