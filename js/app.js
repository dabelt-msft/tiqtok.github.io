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


toDoApp.addItem("asdf", "asf", 'as', "adf");
toDoApp.addItem("asdf", "asf", 'as', "adf");
toDoApp.addItem("asdf", "asf", 'as', "adf");
toDoApp.addItem("asdf", "asf", 'as', "adf");
