//Just my tweaks because I didn't have access to the source.
var meta;
if (document.createElement &&
(meta = document.createElement('meta'))) {
// set properties
meta.name = "viewport";
meta.content = "width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;";

// now add the meta element to the head
document.getElementsByTagName('head').item(0).appendChild(meta);
}
// Something cute for everyone.
function page_Load() {
  setTimeout(function() { window.scrollTo(0, 1); }, 100);
}
