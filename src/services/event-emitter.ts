type Callback = (...args: any[]) => any;

class EventEmitter {
  _id = 1;
  _data: Record<string, { type: string; callback: Callback }> = {};

  on(type: string, callback: Callback) {
    const id = this._id++;
    this._data[id] = { type, callback };
    return () => {
      delete this._data[id];
    };
  }

  emit(type: string, ...args: any[]) {
    Object.values(this._data).forEach((data) => {
      if (data.type !== type) return;
      try {
        data.callback(...args);
      } catch (error) {
        console.warn(error);
      }
    });
  }
}

export default EventEmitter;
