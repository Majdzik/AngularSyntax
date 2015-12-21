// Write your Javascript code.

function ping(host, port, pong) {
  var started = new Date().getTime();
  var http = new XMLHttpRequest();
  http.open('Get', 'http://' + host + '/home/index1/' + started, true);
  http.onreadystatechange = function () {
    if (http.readyState == 4) {
      var ended = new Date().getTime();
      var milliseconds = ended - started;
      if (pong != null) {
        pong(milliseconds);
      }
    }
  };
  try {
    http.send(null);
  } catch (exception) {
    // this is expected
  }
}
function spong(pong) {
  console.log('pong', pong);
  var timeOute = window.setTimeout(function () {
    ping(window.location.host, '', spong);
    delete timeOute;
  }, 1000 * 60);

};
ping(window.location.host, '', spong);