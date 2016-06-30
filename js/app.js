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
  return $($('#todo-item-template').html()).clone();
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
  } else{
        alert("Please enter a title")
    }
  $('.delete-button').on('click', function(){
    $(this).closest('li').remove()
  });
}
//toggles form when hide button is clicked
toDoApp.onHideButtonClicked = function(e){
  e.preventDefault();
    $("#form-wrapper").hide();
    $("#show-button").show();
}

toDoApp.onShowButtonClicked = function(e){
    e.preventDefault();
    $("#form-wrapper").show();
    $("#show-button").hide();
}

toDoApp.panelList = function(){
  return $('#pending-panel-list, #in-progress-panel-list, #completed-panel-list');
}

toDoApp.onAddItemClicked = function(){
  $('#todoModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Add a an item here Mr ' + recipient)
    //modal.find('.modal-body input').val(recipient)
  });
}

// Task appending to page
var toDo = toDoApp;
//creates item on click
$('#submit-button').on("click", toDo.onSubmitButtonClicked);

//show/hide the form on click
$('#hide-button').on("click", toDo.onHideButtonClicked);

//show/hide the form on click
$('#show-button').on("click", toDo.onShowButtonClicked);

//$('#add-item-button').on("click", todo.onAddItemClicked);

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


$('#add-item-button').on("click", todo.onAddItemClicked);
