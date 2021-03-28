export default ({params, isServer}) => {
  return {
    html: `Hello, ${params.name} from ${isServer ? 'server' : 'browser'}`
  }
}
