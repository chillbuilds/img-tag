$('.mainBtn').on('click', function(){
    // console.log(`./assets/pages/${$(this).attr('page')}.html`)
    window.location.href = `./assets/pages/${$(this).attr('page')}.html`
})