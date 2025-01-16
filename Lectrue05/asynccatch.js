function yayorNay(){
    return new Promise((resolve,reject)=> {
        const val = Math.round(Math.random() * 1);
        val ? resoolve("Lucky!!") : reject("Nope..");
    });
}
async function msg() {
    try{
        const msg = await yayorNay();
        console.log(msg);
    }catch (err){
        console.log(err);
    }
}
msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();