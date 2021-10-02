window.onload=function(){
    new Typed('#typed',{
        strings:["Saurabh Singh Bazzad","Full Stack Developer","Coffee Lover","Pro Meme Maker","Ironman😅"],
        typeSpeed:100,
        backSpeed:50,
        backDelay:2000,
        loop:true,
        smartBackspace:true,
        callback:function(){}
    })


    preloaderFadeOutTime = 500;
        function hidePreloader() {
        $('.spinner-wrapper').fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();


}
