import jsdom from 'jsdom';

export default function setupDom() {
  let doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
  let win = doc.defaultView;

  global.document = doc;
  global.window = win;
}
