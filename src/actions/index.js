
export function navigate(path) {
  window.location.hash = path;
  return {
    type: 'NAVIGATE',
    path: path
  }
}
