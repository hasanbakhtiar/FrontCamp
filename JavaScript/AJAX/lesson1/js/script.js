$(function () {
  $("button").click(function () {
    $("p").load("./data/infotar.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
          alert("External content loaded successfully!");
        if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });

    // if ($("button").html() == "fetch data tr") {
    //   $("p").load("../data/infotr.txt");
    //   $("button").html("fetch data en");
    // } else {
    //   $("p").load("../data/infoen.txt");
    //   $("button").html("fetch data tr");
    // }
  });
});
