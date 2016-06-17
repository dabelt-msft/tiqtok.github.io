var toDoApp={};
toDoApp.toDoItems=[];
toDoApp.addItem = function(title, description)
//sticks items into array
{
  this.toDoItems.push({"title": title, "description": description});
  return this.toDoItems[this.toDoItems.length-1];
  console.log(this.toDoItems)
}
