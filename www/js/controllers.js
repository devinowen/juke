angular.module('jukeApp.controllers', [])

// Each tab has it's own controller, and one controller per tab

// With the new view caching in Ionic, Controllers are only called
// when they are recreated or on app start, instead of every page change.
// To listen for when this page is active (for example, to refresh data),
// listen for the $ionicView.enter event:
//
//$scope.$on('$ionicView.enter', function(e) {
//});

.controller('LoginCtrl', function($scope, Spotify, $state) {
  $scope.login = function() {
    Spotify.login().then(function (data) {
      console.log('You are now logged in!');
      console.log(data);
      $state.go('tab.home');
    }, function () {
      console.log('didn\'t log in');
      $state.go('tab.home');
    })
  };

  $scope.guestLogin = function() {
    console.log('Logged-in as guest');
    $state.go('tab.home');
  };
})


.controller('HomeCtrl', function($scope, $ionicPopup) {

  $scope.items = [
    {channel: 'Hip Hop', image: 'img/ccimages/mic.jpg'},
    {channel: 'Pop', image: 'img/ccimages/eq.jpg'},
    {channel: 'Country', image: 'img/ccimages/countryguitar.jpg'},
    {channel: 'Folk', image: 'img/ccimages/banjoplayer.jpg'},
    {channel: 'Electronic', image: 'img/ccimages/dj.jpg'}
  ];

  // Play/pause swap
  $scope.playing = false;
  $scope.playClick = function() {
    $scope.playing = !$scope.playing;
  }

  // Upvote swap - NOTE: This function not called in HTML; as of now, ng-click only voted = !voted for css
  $scope.voted = false;
  $scope.voteClick = function() {
    $scope.voted = !$scope.voted;
  }

  // Triggered on button click
  $scope.addSong = function() {
    $scope.data = {};

  var addSong = $ionicPopup.show({
    template: '<label class="item item-input"><i class="icon ion-search placeholder-icon"></i><input type="text" placeholder="Track, Artist, or Album"></label>',
    title: 'Add a Song',
    subTitle: 'Search by track, artist, or album.',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Add</b>',
        type: 'button-positive',
        onTap: function(e) {}
      }
    ]
  });
  };

  // Triggered on div hold
  $scope.songInfo = function() {
    $scope.data = {};

  var songInfo = $ionicPopup.show({
    template: '<p class="text-center"> <img src="img/emoji/happy.png">*5 <img src="img/emoji/heart.png">*3 <img src="img/emoji/unsure.png">*1</p>',
    title: 'SONG NAME',
    subTitle: 'Added by: USER NAME',
    scope: $scope,
    buttons: [
      {text: '<img src="img/emoji/happy.png">'},
      {text: '<img src="img/emoji/cool.png">'},
      {text: '<img src="img/emoji/heart.png">'},
      {text: '<img src="img/emoji/sad.png">'}
    ]
  });
  };

})


.controller('ChannelsCtrl', function($scope, channelService, Genres) {

  channelService.getChannels(function(response) {
    $scope.channels = response.data;
  });

  // Store data
  $scope.data = {};
  // Get all data
  Genres.get(function(response) {
    $scope.data.genres = response;
  });
})

.controller('aChannelCtrl', function($scope, songService, $ionicPopup) {
  songService.getSongs(function(response) {
    $scope.songs = response.data;
  });

  // Play/pause swap
  $scope.playing = false;
  $scope.playClick = function() {
    $scope.playing = !$scope.playing;
  }

  // Upvote swap - NOTE: This function not called in HTML; as of now, ng-click only voted = !voted for css
  $scope.voted = false;
  $scope.voteClick = function() {
    $scope.voted = !$scope.voted;
  }

  // Triggered on button click
  $scope.addSong = function() {
    $scope.data = {};

  var addSong = $ionicPopup.show({
    template: '<input type="text" class="icon ion-search placeholder-icon">',
    title: 'Add a Song',
    subTitle: 'Search by track, artist, or album.',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Add</b>',
        type: 'button-positive',
        onTap: function(e) {}
      }
    ]
  });
  };

  // Triggered on div hold
  $scope.songInfo = function() {
    $scope.data = {};

  var songInfo = $ionicPopup.show({
    template: '<p class="text-center"> <img src="img/emoji/happy.png">*5 <img src="img/emoji/heart.png">*3 <img src="img/emoji/unsure.png">*1</p>',
    title: 'SONG NAME',
    subTitle: 'Added by: USER NAME',
    scope: $scope,
    buttons: [
      {text: '<img src="img/emoji/happy.png">'},
      {text: '<img src="img/emoji/cool.png">'},
      {text: '<img src="img/emoji/heart.png">'},
      {text: '<img src="img/emoji/sad.png">'}
    ]
  });
  };
})


.controller('PlayingCtrl', function($scope, songService, $ionicPopup) {
  songService.getSongs(function(response) {
    $scope.songs = response.data;
  });

  // Play/pause swap
  $scope.playing = false;
  $scope.playClick = function() {
    $scope.playing = !$scope.playing;
  }

  // Upvote swap - NOTE: This function not called in HTML; as of now, ng-click only voted = !voted for css
  $scope.voted = false;
  $scope.voteClick = function() {
    $scope.voted = !$scope.voted;
  }

  // Triggered on button click
  $scope.addSong = function() {
    $scope.data = {};

  var addSong = $ionicPopup.show({
    template: '<input type="text" class="icon ion-search placeholder-icon">',
    title: 'Add a Song',
    subTitle: 'Search by track, artist, or album.',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Add</b>',
        type: 'button-positive',
        onTap: function(e) {}
      }
    ]
  });
  };

  // Triggered on div hold
  $scope.songInfo = function() {
    $scope.data = {};

  var songInfo = $ionicPopup.show({
    template: '<p class="text-center"> <img src="img/emoji/happy.png">*5 <img src="img/emoji/heart.png">*3 <img src="img/emoji/unsure.png">*1</p>',
    title: 'SONG NAME',
    subTitle: 'Added by: USER NAME',
    scope: $scope,
    buttons: [
      {text: '<img src="img/emoji/happy.png">'},
      {text: '<img src="img/emoji/cool.png">'},
      {text: '<img src="img/emoji/heart.png">'},
      {text: '<img src="img/emoji/sad.png">'}
    ]
  });
  };

})


.controller('GroupsCtrl', function($scope) {})


.controller('ProfileCtrl', function($scope, Profile) {
  // Store data
  $scope.data = {};
  // Get all data
  Profile.get(function(response) {
    $scope.data.profile = response;
    //console.log($scope.data.profile);
  });

});