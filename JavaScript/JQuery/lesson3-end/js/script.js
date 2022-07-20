var samir = $.noConflict()

samir(function(){
    samir('button').click(function(){
        // samir('h1').css("color", "red").slideUp(2000).slideDown(2000)
        // samir('h1').addClass('a');
        // samir('h1').removeClass('a');
        // samir('h1').toggleClass('a');
        // samir('h1').animate({
        //     // left: '250px',
        //     // opacity: '0.5',
        //     // height: '150px',
        //     // width: '150px'
        //     // left: '250px',
        //     // height: '+=150px',
        //     // width: '+=150px'
        //     height: 'toggle'
            
        // },"slow",()=>{
        //     alert("success")
        // })
        // document.querySelector('p').innerHTML = samir('h1').html()
        // document.querySelector('p').innerHTML = samir('h1').text()
        // document.querySelector('p').innerHTML = samir('input').val()
        // document.querySelector('p').innerHTML = samir('input').attr("type")
        // samir('p').text("<b>Hello text</b>");
        // samir('p').html("<b>Hello text</b>");
        // samir('h1').append("<b> text</b>");
        // samir('h1').after("<b> text</b>");
        samir('h1').before("<b> text</b>");
        // samir('input').val("<b>Hello text</b>");

    })
    
})