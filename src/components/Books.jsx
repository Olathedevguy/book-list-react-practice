/* eslint-disable react/prop-types */
import Author from "./Author"
import Image from "./Image"
import Title from "./Title"
const Books = (props) => {

  const {author, img, title,children} = props.bookDetails;

  return (
    <>
      {/* <div>Books</div> */}
    <div className="book">
    <Image img = {img} />
    <Title title = {title}/>
    <Author name = {author}/>
    {children}
    {/* <p>{nm}</p> */}
    </div>

    
    </>
    
  )
}
export default Books