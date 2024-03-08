$(document).ready(function() {
    $('body').css('body')
    $('button').css('color', 'red');
    const h1 = $('h1')
    h1.addClass('h1-title')
    
    $('.remove-css').click(() => {
        h1.removeClass('h1-title')
        console.log('Clicked')
    })
    
    $('.text').addClass('box')

    $('h1').attr()

})
