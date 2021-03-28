export default ({params, state}) => {
  if (!params.number) {
    return {
      html: `You must provide the number parameter`
    }
  }

  return {
    html: `The pokemon number ${params.number} is called ${state.name}`
  }
}
