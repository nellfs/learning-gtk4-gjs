#!@GJS@ -m

import GLib from "gi://GLib"

imports.package.init({
  name: '@PACKAGE_NAME@',
  version: '@PACKAGE_VERSION@',
  prefix: '@PREFIX@',
  libdir: '@LIBDIR@'
})

const loop = new GLib.MainLoop(null, false);
import('resource:///org/example/filebrowser/js/main.js')
  .then((main) => {
  GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
    loop.quit();
    imports.package.run(main);
    return GLib.SOURCE_REMOVE;
    });
  })
  .catch(logError);
  loop.run();
