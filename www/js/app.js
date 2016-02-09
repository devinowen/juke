// JukePracticeTabs App

angular.module('jukeApp', ['ionic', 'jukeApp.controllers', 'jukeApp.services', 'ngResource', 'spotify', 'ionic.contrib.ui.hscrollcards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, SpotifyProvider) {

  // set tabs to bottom of screen on all devices (notably, Android)
  $ionicConfigProvider.tabs.position('bottom');

  // angular-spotify configuration w/ clientID, URI, and scope
  SpotifyProvider.setClientId('4a641043ea3746f481b99bd63b41564d');
  SpotifyProvider.setRedirectUri('http://localhost/callback');
  SpotifyProvider.setScope('user-read-private', 'playlist-read-private');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // sign in state
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })


  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // State for OAuth process


  // Each tab has its own nav history stack:
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.channels', {
    url: '/channels',
    views: {
      'tab-channels': {
        templateUrl: 'templates/tab-channels.html',
        controller: 'ChannelsCtrl'
      }
    }
  })

  // Channel state for second page in channels stack
  .state('tab.aChannel', {
    url: '/channels/aChannel',
    views: {
      'tab-channels': {
        templateUrl: 'templates/channel.html',
        controller: 'aChannelCtrl'
      }
    }
  })

  .state('tab.playing', {
    url: '/playing',
    views: {
      'tab-playing': {
        templateUrl: 'templates/tab-playing.html',
        controller: 'PlayingCtrl'
      }
    }
  })

  .state('tab.groups', {
    url: '/groups',
    views: {
      'tab-groups': {
        templateUrl: 'templates/tab-groups.html',
        controller: 'GroupsCtrl'
      }
    }
  })

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
