var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $("#addRoom").click(function() {
      var newUserRoom = prompt('Enter room name:');
      var newUserRoomObj = {roomname: newUserRoom};
      RoomsView.renderRoom(newUserRoomObj);
      //then need to add this new room to the room object and to the DOM
    })

  },

  render: function() {
      for (let i = 0; i < Messages.results.length; i++) {
        //loop over messages data, and extract roomname
        //need to make object from each one and render it
        var roomObj = {roomname: Messages.results[i].roomname};
        if (!Rooms.allrooms.includes(roomObj)) {
          Rooms.allrooms.push(roomObj);
          RoomsView.renderRoom(roomObj);
        }
    }      
},
      
  
  renderRoom: function (room) {
    let newRoom = _.template('<option id="rooms"><%-roomname%></option>');
    this.$select.append(newRoom(room)); //room is an object
  }
}

