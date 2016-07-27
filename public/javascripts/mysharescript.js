var elem = document.getElementById('pad');
var cm = CodeMirror.fromTextArea(elem, {
  lineNumbers: true,
  mode: "default",
});
var s = new BCSocket(null, {reconnect: true});
var sjs = new window.sharejs.Connection(s);

if(document.location.pathname.length > 1){
        // implement share js
        var documentName = document.location.pathname.substring(1);
        var doc = sjs.get(documentName, 'sephx');
		doc.subscribe();
		doc.whenReady(function () {
		  if (!doc.type) doc.create('text');
		  if (doc.type && doc.type.name === 'text') {
		    doc.attachCodeMirror(cm);
		  }
		});      
}
