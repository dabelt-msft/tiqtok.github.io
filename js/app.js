//Item creation
var toDoApp={};
toDoApp.toDoItems=[];
//sticks items into array
toDoApp.addItem = function(title, description, time, priority){
    var id = new Date().getTime();
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
  newItem.find('.todo-title').attr('id','title-'+item.id);
  newItem.find('.todo-description').html(item.description);
  newItem.find('.todo-description').attr('id','description-'+ item.description);
  newItem.find('.edit-button').attr('id',item.id);

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
        toastr.warning('Please enter a title', {timeOut: 2000});
    }
    //adds functionality for edit and delete button
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

//method for clearing close button
toDoApp.clearCloseButton = function(){
      console.log("form cleared");
      $("#form")[0].reset();
}

//method for deleting Task
toDoApp.delete = function(){
  var id = $(this).attr('id');
  var arr=toDoApp.toDoItems;
  $(this).closest('li').remove()
  arr.splice(arr.forEach(function(item){
    if (item.id == id){
      return item;
    }
  }), 1);
}

//method for editing tasks
toDoApp.edit = function(){
  var id = $(this).attr('id');
  var thisTask;
  toDoApp.toDoItems.forEach(function(item){
    if (item.id == id){
      thisTask = item;
    }
  });
    //updates form with current task data
  $("#title-input").val(thisTask.title);
  $("#description-input").val(thisTask.description);
  $("#time-input").val(thisTask.time);
  $("#priority-input").val(thisTask.priority);
   //applies changes to Task
  $("#submit-button").on("click", (e)=>{
    //changes object
    e.preventDefault();
    thisTask.title = $("input[title-input]").val();
    thisTask.description = $("#description-input").val();
    thisTask.time = $("#time-input").val();
    thisTask.priority = $("#priority-input").val();
    //changes html element
    $("#title-"+id).attr('text',thisTask.title);
    $("#description-"+id).html(thisTask.description);
  })
}
// Task appending to page
var toDo = toDoApp;
//creates item on click
$('#submit-button').on("click", toDo.onSubmitButtonClicked);

//show/hide the form on click
$('#hide-button').on("click", toDo.onHideButtonClicked);

//show/hide the form on click
$('#show-button').on("click", toDo.onShowButtonClicked);

//event listener for close button
$("#close-button").on("click", toDo.clearCloseButton)



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

$('#add-item-button').on("click", toDo.onAddItemClicked);

//adds edit and delete event listeners
$('.top-buffer').on('click', '.delete-button', toDo.delete);
$('.top-buffer').on('click','.edit-button', toDo.edit);
