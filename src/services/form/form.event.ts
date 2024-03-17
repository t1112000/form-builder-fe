import EventEmitter from "../event-emitter";

class FormEvent extends EventEmitter {
  onReloadFormRecent(callback: () => void) {
    return this.on("reload_form_recent", callback);
  }

  emitReloadFormRecent() {
    this.emit("reload_form_recent");
  }
}

export default new FormEvent();
