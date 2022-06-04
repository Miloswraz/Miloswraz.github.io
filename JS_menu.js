let check = 0;

function menu_list(){
    let menu = document.getElementById("mini_menu_list");

    if(check==0){
        menu.style.display = "block";
        check = 1;
    } else
    if(check==1){
        menu.style.display = "none";
        check = 0;
    }
}