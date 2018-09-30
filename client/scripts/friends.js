var Friends = {
  friends: new Set,
  isFriend: function(name) {
    return Friends.friends.has(name);
  },
  toggleFriend: function(name, callback = () => {}) {
    if (Friends.friends.has(name)) {
      delete Friends.friends(name);
      callback(false);
    } else {
      Friends.friends.add(name);
      callback(true);
    }
  }

  
};