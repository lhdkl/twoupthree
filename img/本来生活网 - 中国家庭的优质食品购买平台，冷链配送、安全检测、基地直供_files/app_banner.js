$(function(){
    var hasShownApp=window.Cookies('hasShownApp').val();
    if(hasShownApp){return}$('body').prepend('<div style="height:126px;background:url(https://image.benlailife.com/images/common/appstore_banner_180.png) center top no-repeat;position:relative;" id="appstore_banner"><img id="appstore_banner_close" src="https://image.benlailife.com/images/common/appstore_close.png" style="position:absolute;top:10px;right:10px;cursor:pointer;"></div>');
    $('#appstore_banner_close').click(function(){$('#appstore_banner').remove();
    document.cookie='hasShownApp=1;path=/'})});