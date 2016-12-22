$(function() {
    window.onload = function() {
        var $li = $('.tab-item li');
        var $ul = $('.tab-content ul');

        $li.mouseover(function() {
            console.log(1);
            var $this = $(this);
            var $t = $this.index();
            $li.removeClass();
            $this.addClass('tab-current');
            $ul.css('display', 'none');
            $ul.eq($t).css('display', 'block');
        });
    }
});
