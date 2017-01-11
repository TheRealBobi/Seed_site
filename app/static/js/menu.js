<script type="text/javascript">
$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = 90;
        if($(window).scrollTop() >= scrollTop){
            $('.nav').css({
                position : 'fixed',
                top : '0'
            });
        }
        if($(window).scrollTop() < scrollTop){
            $('.nav').removeAttr('style');  
        }
    })
})</script>
