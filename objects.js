
var playlist = {
  occupation: 'song',
  test: 'test'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
   delete playlist.toString(artistName)
}

console.log(playlist)