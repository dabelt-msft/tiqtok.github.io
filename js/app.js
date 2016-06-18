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
//adds items to page
toDoApp.addItemToPage = function(item){
  var newItem = toDo.newItemTemplateClone();
  newItem.find('.todo-title').prepend(item.title);
  newItem.find('.todo-description').html(item.description);

  $('#pending-panel-list').append(newItem);
}
//gets input from user when submit button is clicked
toDoApp.onSubmitButtonClicked = function(e){
  e.preventDefault();
  var title = $('#title-input').val();
  var description = $('#description-input').val();
  var time = $('#time-input').val();
  var priority = $('#priority-input').val();
  if(title!=""){
    var addedItem = toDo.addItem(title, description, time, priority);
    toDo.addItemToPage(addedItem);
    $("#form")[0].reset();
  }
  $('.delete-button').on('click', function(){
    $(this).closest('li').remove()
  });
}
//toggles form when hide button is clicked
toDoApp.onHideButtonClicked = function(e){
  e.preventDefault();
  $("#form-wrapper").toggle();
  if ($("#hide-button").text()==="Hide Form"){
    $("#hide-button").text("Show Form");
  } else {
    $("#hide-button").text("Hide Form");
  }
}

toDoApp.panelList = function(){
  return $('#pending-panel-list, #in-progress-panel-list, #completed-panel-list');
}

// Task appending to page
var toDo = toDoApp;
//creates item on click
$('#submitButton').on("click", toDo.onSubmitButtonClicked);

//show/hide the form on click
$('#hideButton').on("click", toDo.onHideButtonClicked);

toDo.panelList().sortable({
    handle: '.panel-heading',
    connectWith: '.connected-sortable',
    update: function() {
        $('.panel', toDo.panelList).each(function(index, elem) {
            var $listItem = $(elem),
                newIndex = $listItem.index();

            // Persist the new indices.
        });
    }
}).disableSelection();
