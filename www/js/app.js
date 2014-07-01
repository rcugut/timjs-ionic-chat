angular.module('timjsChat', ['ionic', 'timjsChat.services', 'timjsChat.filters', 'timjsChat.controllers', 'firebase'])


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('chat', {
    url: '/chat',
    views: {
      tab_chat: {
        templateUrl: 'templates/chat.html',
        controller: 'ChatCtrl'
      }
    }
  });


  $stateProvider.state('settings', {
    url: '/settings',
    views: {
      tab_settings: {
        templateUrl: 'templates/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });


  $stateProvider.state('about', {
    url: '/about',
    views: {
      tab_about: {
        templateUrl: 'templates/about.html'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/chat');
});

