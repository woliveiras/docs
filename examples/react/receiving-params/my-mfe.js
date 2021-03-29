const HelloWorld = ({name}) => <div>
  Hello, {name}!
</div>

export default ({params}) => <HelloWorld name={params.name} />
