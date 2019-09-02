function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function () {
    $(function () {
        $('.dropdown-toggle').click(
            function () {
                if ($(this).next().is(':visible')) {
                    location.href = $(this).attr('href');;
                }
            });
    });

    $('#back-to-top').on('click', function () {
        topFunction();
    });
});