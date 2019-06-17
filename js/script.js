window.onload=function(){
    new Typed('#typed',{
        strings:["Saurabh Singh Bazzad","Full Stack Developer","Coffee Lover","Pro Meme Maker"],
        typeSpeed:100,
        backSpeed:50,
        backDelay:2000,
        loop:true,
        smartBackspace:true,
        callback:function(){}
    })


    $('.skills-div').hover(function(){
        $(this).addClass('bg-dark text-light')
    },function(){
        $(this).removeClass('bg-dark text-light')
    })

    let meri_image=$('#meri-image')
    window.onresize=function(){
        let width=window.innerWidth
        if(width<728&&meri_image.attr('src')=="./img/img.jpeg"){
            meri_image.attr('src',"./img/im1.jpg")
        }
        if(width>728&&meri_image.attr('src')=="./img/im1.jpg"){
            meri_image.attr('src',"./img/img.jpeg")
        }
    }
}