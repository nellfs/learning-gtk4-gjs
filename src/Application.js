import GTK from 'gi://Gtk';
import GObject from 'gi://GObject';

export const FbrApplication = GObject.registerClass({
    GTypeName: 'FbrApplication'
}, class extends Gtk.Application {
vfunc_activate() {
      	const window = new Gtk.ApplicationWindow({ application: this });
      	const label = new Gtk.Label({ label: 'Hello World!' });
	      window.child = label;
	      window.present();
  }
});
