const Heading = (props) => {
    let pattern = /#([^#]+)#/g
    let findtext = props.text.replace(pattern, "<span class='one'>$1</span>")
  return (
    <props.as className={` ${props.className} font-open text-[40px] font-bold`} dangerouslySetInnerHTML={{ __html: findtext}}></props.as>
  )
}

export default Heading