// const topicRec = (document.querySelector("#topic").value = "Recommendations");

// const topicEvents = (document.querySelector("#topic").value = "Events");

// const topicTips = (document.querySelector("#topic").value = "Pet Tips");

$(".filterselector").click(function () {
  var id = $(this).data("id");

     if (id === "Recommendations") {
       $(".filter-Recommendations").show();
       $(".filter-PetTips").hide();
       $(".filter-Events").hide();
     } else if (id === "PetTips") {
       $(".filter-Recommendations").hide();
       $(".filter-PetTips").show();
       $(".filter-Events").hide();
     } else if (id === "Events") {
       $(".filter-Recommendations").hide();
       $(".filter-PetTips").hide();
       $(".filter-Events").show();
       } else if (id === "All") {
        $(".filter-Recommendations").show();
       $(".filter-PetTips").show();
       $(".filter-Events").show();
       }

//  const filterArray = ["Recommendations", "PetTips", "Events"];
//  filterArray.forEach((item) => {
//    id === item ? $(".filter-" + item).show() : $(".filter-" + item).hide();
//  });

});

// this overrides `contains` to make it case insenstive
jQuery.expr[":"].contains = function (a, i, m) {
  return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};

$("#search").keyup(function () {
  $(".card").removeClass("d-none");
  var filter = $(this).val(); // get the value of the input, which we filter on
  $("#card")
    .find(
      '.card .card-body .card-text .post_topic:not(:contains("' + filter + '"))'
    )
    .parent()
    .parent()
    .parent()
    .addClass("d-none");
});
