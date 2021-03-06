import { EventEmitterType } from './EventEmitter';

type callbackType = (param: { [data: string]: any }) => void;

const EventHandler = (emitter: EventEmitterType, audioCtx?: AudioContext) => ({
  ready(callback: callbackType) {
    emitter.listener('decoded', callback);
  },

  start(callback: callbackType) {
    emitter.listener('start', callback);
  },

  end(callback: callbackType) {
    emitter.listener('end', callback);
  },

  state(callback: callbackType) {
    if (audioCtx) {
      audioCtx.onstatechange = () => callback({ data: audioCtx.state });
    }
  },
});

export default EventHandler;
