export default ({isServer, element}) => {
  if (!isServer) {
    element.addEventListener('click', () => alert('Thanks!'));
  }

  return {
    html: `Click me`,
  }
}
