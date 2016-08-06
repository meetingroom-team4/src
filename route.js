/**
 * Created by amber on 16-8-6.
 */
let gotoMainpage= require('./command/goto-main-page');
function route() {
    let result = gotoMainpage();
    return {text:result.text};
}

module.exports=route;