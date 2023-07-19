let expenseCount = 0;
$(document).ready(function () {
  $(".add-btn").click(function () {
    $(".form-section").fadeIn(200);
    $(".form-section").css("display", "flex");
  });

  $(".cancel-action-btn").click(function () {
    $(".form-section").fadeOut();
  });

  $(".add-action-btn").click(function () {
    var expenseName = $("#expense-name").val();
    var expenseAmount = $("#expense-amount").val();

    var newExpense =
      "<tr>" +
      "<td>" +
      expenseName +
      "</td>" +
      "<td>" +
      expenseAmount +
      "</td>" +
      "<td><button class='dlt-btn' id ='dltBtn'>Remove</button></td>" +
      "</tr>";
    $("#expense-body").append(newExpense);

    $("#expense-name").val("");
    $("#expense-amount").val("");

    expenseCount = expenseCount + 1;

    let total = $("#totalExpenses");
    total.text(expenseCount);
    $(".form-section").fadeOut();
    $("#stats-table").css("display", "flex");
    $("#expense-table").css("display", "flex");
    $("#empty-list").css("display", "none");
  });

  $("#expense-body").on("click", ".dlt-btn", function () {
    $(this).closest("tr").remove();
    expenseCount--;

    let total = $("#totalExpenses");
    total.text(expenseCount);

    if (expenseCount === 0) {
      $("#stats-table").css("display", "none");
      $("#expense-table").css("display", "none");
      $("#empty-list").css("display", "flex");
    } else {
      $("#stats-table").css("display", "flex");
      $("#expense-table").css("display", "flex");
      $("#empty-list").css("display", "none");
    }
  });
  if (expenseCount === 0) {
    $("#stats-table").css("display", "none");
    $("#expense-table").css("display", "none");
    $("#empty-list").css("display", "flex");
  }
});

$(window).on("beforeunload", function () {
  return "Are you sure you want to leave this page? Your records will be lost.";
});
