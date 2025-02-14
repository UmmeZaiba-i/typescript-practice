// ADVANCE PROPS
type HeadingProps={
    children : string
}
const Heading = (props:HeadingProps) => {
  return (
    <div>
      <h5>{props.children}</h5>
    </div>
  )
}

export default Heading
