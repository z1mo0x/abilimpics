$(document).ready(function() {
	 $('.inline-popup').magnificPopup({
       type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
    
   
    $('#council').on('change', function() {
      
    });
    
    //Отправка данных в контактах
    $("#feedbackForm").ajaxForm(function() {
        $.ajax({
            type: "POST",
            data: jQuery("#feedbackForm").serialize(),
            url: "/netcat/add.php",
            success: function() {
                $.magnificPopup.open({
                        items: {
                            src: $('<div class="popup" id="popup-success"><h3><span>Спасибо!</span></h3><div class="popup-content"><p><img src="/tm/build/dev/img/check.svg" alt="" width="64px" height="64px" /></p><p>Ваша заявка успешно отправлена.</p><a href="javascript:$.magnificPopup.close();" class="button button--tertiary">Закрыть</a></div></div>')
                        },
                        type: "inline"
                    }),
                    $("#feedbackForm").trigger('reset');
            },
            error: function() {}
        });
    });
});    
  