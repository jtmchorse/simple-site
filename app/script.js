$(function() {
    $("button").click(function() {
        var url = $(this).attr("id");
        $.get(url, function(response) {
            var resText;
            if (typeof response === "object") {
                resText = response.setup + ": " + response.punchline;
            } else {
                resText = response;
            }
            $("#ajax-text").text(resText);
        });
    });

  $("#piglatin").on("submit", function(e) {
    e.preventDefault();

    var firstname = $("input[name=firstname]").val();
    var lastname = $("input[name=lastname]").val();
    var name = { firstname: firstname, lastname: lastname };

    $.post("piglatin", name, function(response) {
      var piglatinified = response.firstname + " " + response.lastname;
            $("span.name").text(piglatinified);
        });
    });//end piglatin function

    // $("#Rando input[type='submit']").on("click", function(e) {
    $("#Rando").on("click", function(e) {
        e.preventDefault();
        var theSetValue = $('#Rando input[type="number"]').val();
      $.post("random", theSetValue, function(response) {
              $("#Simple .return span").text(response);
          });//end .post function
    });//end random function

});
