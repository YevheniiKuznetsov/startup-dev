var showHide = function(el1, el2){

    $(document).mouseover(function(event){
        var target = event.target;
        var targetElement = target.className.split(' ');
        var showHideElementInside = target.getElementsByClassName(el2);
        var showHideElementOutside = document.getElementsByClassName(el2);

        if(targetElement == el1){
            hide(showHideElementOutside);
            showHideElementInside[0].style.display="block";
        } else {
            hide(showHideElementInside);
        }
    });

    function hide(el){
        for(var i = 0; i<el.length; i++){
            el[i].style.display='none';
        }
    }
}
export default showHide;
