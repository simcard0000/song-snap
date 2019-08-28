//For the images:
UIkit.upload(".js-upload",
{
    url: "",
    multiple: false,

    loadEnd: function(e){
        console.log("yay!")
    }

});
