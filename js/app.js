var toDoApp={};
toDoApp.toDoItems=[];
toDoApp.addItem = function(title, description, time, priority)
//sticks items into array
{
    var id = this.toDoItems.length + 1;
    this.toDoItems.push({"id": id, "title": title, "description": description, "time": time, "priority": priority});

    console.log(this.toDoItems)
  return this.toDoItems[this.toDoItems.length-1];

}

var toDo = toDoApp;
var todoItemTemplateClone = function() {
  // console.log($($('#todoItemTemplate').html()).clone());
  return $($('#todoItemTemplate').html()).clone();
}
var addItemToPage = function(item){
  var newItem = todoItemTemplateClone();
  newItem.find('.todo-title').html(item.title);
  newItem.find('.todo-description').html(item.description);

  $('#draggablePanelList').append(newItem);
}

$('#submitButton').on("click", function(e) {
    e.preventDefault();
    var title = $('#title-input').val();
    var description = $('#description-input').val();
    var time = $('#time-input').val();
    var priority = $('#priority-input').val();
    var addedItem = toDo.addItem(title, description, time, priority);
    if(title!=""){
      console.log(addedItem.time + addedItem.priority)
      addItemToPage(addedItem);
      //$('#draggablePanelList').append('<li class="panel panel-info"><div class="panel-heading">' + addedItem.title + '</div><div class="panel-body">' + addedItem.description + '</div></li>')
          // $('#draggablePanelList').append("<li>" + addedItem.title + addedItem.time + addedItem.priority + "</li>");
      $("#form")[0].reset();
    }
});
// should show/hide the form on click
$('#hideButton').on("click", function(e){
  e.preventDefault();
  $("#formWrapper").toggle();
  if ($("#hideButton").text()==="Hide Form"){
    $("#hideButton").text("Show Form");
  } else {
    $("#hideButton").text("Hide Form");
  }
});

var panelList = $('#draggablePanelList');

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
