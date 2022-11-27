

$("#nav-icon").click(openMenu);

function openMenu() {

    if($("#mob-nav-id").is(":hidden")){
        $("#mob-nav-id").slideDown("slow");
        $(".nav-link").css("display", "block");
    } else{
        $("#mob-nav-id").slideUp("slow");
        $(".nav-link").css("display", "none");
    }
     
  }