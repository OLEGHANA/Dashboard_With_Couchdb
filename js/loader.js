// JavaScript Document
function couchapp_load(scripts) {

  for (var i=0; i < scripts.length; i++) {

    document.write('<script src="'+scripts[i]+'">< \/script>')

  };

};

///"/_utils/script/sha1.js",
///"/_utils/script/json2.js",

couchapp_load([
"/_utils/script/json2.js",
"/_utils/script/sha1.js",
"/_utils/script/jquery.js?1.4.2",
"/_utils/script/jquery.couch.js?0.11.0",
"/_utils/script/jquery.dialog.js?0.11.0"
]);
///$.couch.urlPrefix = "http://localhost:5984";