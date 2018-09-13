var occupation = 'artist'

var playlist = {
  [occupation]: 'song',
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
   delete playlist[artistName]
}