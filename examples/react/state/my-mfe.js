const HelloWorld = ({number, name}) => <div>
  The pokemon number {number} is called {name}
</div>

export default ({params, state}) =>{
  if (!params.number) {
    return <div>You must specify a pokémon <strong>number</strong></div>
  }

  return <HelloWorld number={params.number} name={state.name} />;
}
