$(document).ready(function() {
  var masterList = [];
  var currentList;

  $("form#new-list").submit(function(event) {
    event.preventDefault();
    var inputtedNewList = $("input#list-name").val();
    var list = { listName: inputtedNewList, tasks: [] };

    masterList.push(list);

    $(".task-lists").show();
    $("ul.lists").append("<li class='task-list active'>" + list.listName + "</li>");
    $("input#list-name").val("");

    $(".task-list").last().click(function() {
      currentList = list;
      var currentListName = list.listName;

      $(".list-name").text(currentList.listName);

      $("#task-list").empty();
      currentList.tasks.forEach(function(task) {
        $("tbody.tasks").append("<tr><td>" + task.name + "</td><td>" + task.date + "</td></tr>");
      });

      $("#tasks").show();
    });
  });

  $("form#new-task").submit(function(event) {
    var taskNew = new Object();
    taskNew.name = $("input#task").val();
    taskNew.date = $("input#date").val();
    currentList.tasks.push(taskNew);

    $("tbody.tasks").append("<tr><td>" + taskNew.name + "</td><td>" + taskNew.date + "</td></tr>");
    $("table").show();
    $("input#task").val("");

    $(".image").slideUp().fadeIn("slow", function() {
      $(".image").delay(900).fadeOut("fast");
    });

    $(".stress").text(taskNew.name);

      $("tbody.tasks tr").last().click(function() {
        $(this).fadeOut();
  });

    event.preventDefault();
  });
});
