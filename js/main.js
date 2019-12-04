/* start navbar */

let saved_btn = $('.navbar .saved button');
let account_btn = $('.navbar .account button');$ 

$('.navbar-light .navbar-toggler').click(() => {
    saved_btn.toggleClass("disabled");
    account_btn.toggleClass("disabled");
})

/* end navbar */