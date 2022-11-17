/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
  let lockedRooms = {};
  let openRooms = new Set();
  openRooms.add(0)

  const unlockRooms = (key) => {
    openRooms.add(key);
    if (lockedRooms[key]) {
      let newKeys = lockedRooms[key];
      delete lockedRooms[key];
      newKeys.forEach(key => unlockRooms(key))
    }

  }

  for (let i = 0; i < rooms.length; i++) {
    let keys = rooms[i];
    if (openRooms.has(i)) {
      keys.forEach(key => unlockRooms(key));
    } else {
      lockedRooms[i] = keys;
    }
  }
  return openRooms.size === rooms.length;

};