var playlist = {
  'Eminem' : 'Till I collapse',
  'Jay-Z' : 'Dirt off my shoulder'
}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistName) {ű
  delete artistName;
  return playlist;
}
