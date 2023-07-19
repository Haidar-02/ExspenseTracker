$(document).ready(function () {
  var totalExpenses = 0;

  $("#expense-form").submit(function (event) {
    event.preventDefault();

    var expense = $("#expense-input").val();
    var amount = parseFloat($("#amount-input").val());

    if (expense && amount) {
      var expenseItem = $("<li></li>").text(expense + ": $ " + amount);
      $("#expense-list").append(expenseItem);

      totalExpenses += amount;
      $(".total-expenses").text(
        "Total Expenses: $ " + totalExpenses.toFixed(2)
      );

      $("#expense-input").val("");
      $("#amount-input").val("");
    }
  });
});
