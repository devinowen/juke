angular.module('jukeApp.services', [])

.service('songService', function($http) {
  this.getSongs = function(callback) {
    $http.get('data/songs.json')
    .then(callback)
  };
})

.service('channelService', function($http) {
  this.getChannels = function(callback) {
    $http.get('data/channels.json')
    .then(callback)
  };
})

.factory('Profile', function($resource) {
  // Change '1266806121' to variable once ID is know from login screen
  var profileID = '1266806121';
  return $resource('https://api.spotify.com/v1/users/' + profileID);
})

.factory('Genres', function($resource) {
  return $resource('http://developer.echonest.com/api/v4/genre/list?api_key=GIAQ6LYFEM9IQ7RGJ&format=json'); // Genres -- can add '&results=5'
  // return $resource('http://developer.echonest.com/api/v4/artist/list_terms?api_key=GIAQ6LYFEM9IQ7RGJ&format=json&type=style'); // Styles
});
