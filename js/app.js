//Item creation
var toDoApp={};
toDoApp.toDoItems=[];
//sticks items into array
toDoApp.addItem = function(title, description, time, priority){
    var id = this.toDoItems.length + 1;
    this.toDoItems.push({"id": id, "title": title, "description": description, "time": time, "priority": priority});
    console.log(this.toDoItems)
  return this.toDoItems[this.toDoItems.length-1];
}
//clones the new Item Template
toDoApp.newItemTemplateClone = function() {
  return $($('#todoItemTemplate').html()).clone();
}

toDoApp.addItemToPage = function(item){
  var newItem = toDo.newItemTemplateClone();
  newItem.find('.todo-title').prepend(item.title);
  newItem.find('.todo-description').html(item.description);

  $('#draggablePanelList').append(newItem);
}
// Task appending to page
var toDo = toDoApp;


toDoApp.onSubmitButtonClicked = function(e){
  e.preventDefault();
  var title = $('#title-input').val();
  var description = $('#description-input').val();
  var time = $('#time-input').val();
  var priority = $('#priority-input').val();
  if(title!=""){
    var addedItem = toDo.addItem(title, description, time, priority);
    toDo.addItemToPage(addedItem);
    //$('#draggablePanelList').append('<li class="panel panel-info"><div class="panel-heading">' + addedItem.title + '</div><div class="panel-body">' + addedItem.description + '</div></li>')
        // $('#draggablePanelList').append("<li>" + addedItem.title + addedItem.time + addedItem.priority + "</li>");
    $("#form")[0].reset();
  }
}

//creates item on click
$('#submitButton').on("click", toDoApp.onSubmitButtonClicked);

//show/hide the form on click
$('#hideButton').on("click", function(e){
  e.preventDefault();
  $("#formWrapper").toggle();
  if ($("#hideButton").text()==="Hide Form"){
    $("#hideButton").text("Show Form");
  } else {
    $("#hideButton").text("Hide Form");
  }
});

var panelList = $('#draggablePanelList, #inProgressPaneList, #completedPaneList');

panelList.sortable({
    // Only make the .panel-heading child elements support dragging.
    // Omit this to make then entire <li>...</li> draggable.
    handle: '.panel-heading',

    update: function() {
        $('.panel', panelList).each(function(index, elem) {
            var $listItem = $(elem),
                newIndex = $listItem.index();

            // Persist the new indices.
        });
    }
});
