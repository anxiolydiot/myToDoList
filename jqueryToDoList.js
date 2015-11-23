$(document).ready(function(){
  $("#addItem").on("click", function(e) {
    e.preventDefault();
    
    var newWord = $("#newItem").val().trim();
    var isDuplicate = false;
    $("td.word-td").each(function() {
      if($(this).text().trim().toLowerCase() === newWord.toLowerCase()) {
        isDuplicate = true;
        return;
      }
    });

    if(isDuplicate) {
      $(".alert-danger").slideDown();
      return;
    }

    var newRow = $("<tr>");
    var wordTd = $("<td>").addClass("word-td").append(newWord);
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("RM");
    var deleteTd = $("<td>").append(deleteBtn);
    var doneButton = $("<button>").addClass("btn btn-info").append("Done");
    var doneTd = $("<td>").append(doneButton);

    newRow.append(wordTd).append(deleteTd);
    $("tbody").append(newRow);

    newRow.append(wordTd).append(doneTd);
    $("tbody").append(newRow);

    $("#newWord").val("").focus();
  });

  $("#theTable").on("click", ".btn-danger", function() {
    if($("tr").length) {
      $(this).parent().parent().remove();  
    }
    
  });

  $("#newWord").on("keydown", function() {
    $(".alert-danger").fadeOut(1500);
  });

    $("#theTable").on("click", ".btn-info", function() {
    if($("tr").length) {
      $(this).parent().parent().wrap("<strike>")();  
    }
    });


});
  









   
