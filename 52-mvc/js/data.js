$(function() {
    var data = {};
    var value = 0;
    var listeners = [];
    
    data.set = function(val) {
        value = val;   
        notify(val);
    };
  
    data.get = function() {
        return value;
    };
  
    data.on = function(listener) {
        listeners.push(listener);
    };
  
    function notify(msg) {
        listeners.forEach(function(e) {
            e.call(this, msg);
        });
    }
    window.mvcData = data;
});