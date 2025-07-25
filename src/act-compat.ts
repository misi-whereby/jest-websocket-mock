/**
 * A simple compatibility method for react's "act".
 * If react is already installed, we just use
 * their implementation - it's complete and has useful warnings.
 * If react is *not* installed, then we just assume
 * that the user is not testing a react application, and use a noop instead.
 */

type Callback = () => Promise<void | undefined> | void | undefined;
type AsyncAct = (callback: Callback) => Promise<undefined>;
type SyncAct = (callback: Callback) => void;

let act: AsyncAct | SyncAct;

try {
  act = require("react").act;
} catch (_) {
  act = (callback: Function) => {
    callback();
  };
}

export default act;
