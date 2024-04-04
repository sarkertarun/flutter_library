const SearchInput = ({type,placeholder , className, name, value,id}) => {
    return (
      <input type={type} id={id} className={`${className} font-open text-base bg-sColor outline-none py-2.5 pl-[42px] pr-8 rounded-full border `} placeholder={placeholder} name={name} value={value}/>
  
    )
  }
  
  export default SearchInput