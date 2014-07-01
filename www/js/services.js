angular.module('timjsChat.services', ['firebase'])

.factory("ChatService", function($firebase) {
  var _chatMessagesRef = $firebase(new Firebase('https://scorching-fire-1864.firebaseio.com/timjs_chat'));
  var _username = 'User' + Math.floor(Math.random() * 501);

  return {

    chatMessagesRef: _chatMessagesRef,

    getUsername: function() {
      return _username;
    },

    setUsername: function (username) {
      _username = username;
    }


  };
});
