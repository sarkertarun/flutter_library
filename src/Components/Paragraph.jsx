
const Paragraph = ({text,className}) => {
    return (
      <p className={`${className} text-paraColor font-open text-sm font-normal leading-9`}>{text}</p>
    )
  }
  
  export default Paragraph