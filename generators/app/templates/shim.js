// React 16 depends on `requestAnimationFrame`
// (even in test environments)
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
