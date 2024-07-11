import Books from "./Books"
const BookList = () => {

  const bookShelf = [

    {
      author: 'Evie Woods',
      title: 'The Lost Bookshop',
      img: 'https://m.media-amazon.com/images/I/91Sy3S-198L._AC_UL480_FMwebp_QL65_.jpg',
    },

    {
      author: 'Sarah Alderson',
      title: 'The Cabin in the Woods',
      img: 'https://m.media-amazon.com/images/I/81goNjYUVxL._AC_UL480_FMwebp_QL65_.jpg',
    },

    {
    author: 'Marta Acosta ',
    title: 'The Dog Thief',
    img: 'https://m.media-amazon.com/images/I/914LSidKp3L._AC_UL480_FMwebp_QL65_.jpg',
   },

   {
    author: 'Donna Marchetti ',
    title: 'Hate Mail',
    img: 'https://m.media-amazon.com/images/I/71mUi+Hd3pL._AC_UL480_FMwebp_QL65_.jpg',
  },

  {
    author: 'Steve Frech',
    title: 'The Good Husband',
    img: 'https://m.media-amazon.com/images/I/81FYBHmfQrL._AC_UL480_FMwebp_QL65_.jpg',
  },

  {
    author: 'David J. Gatward ',
    title: 'Grimm Up North',
    img: 'https://m.media-amazon.com/images/I/71ej80wEbyL._SY466_.jpg',
  },

  ]

  // const firstBook = {
  //   author: 'Evie Woods',
  //   title: 'The Lost Bookshop',
  //   img: 'https://m.media-amazon.com/images/I/91Sy3S-198L._AC_UL480_FMwebp_QL65_.jpg',
  // };
  // const secondBook = {
  //   author: 'Sarah Alderson',
  //   title: 'The Cabin in the Woods',
  //   img: 'https://m.media-amazon.com/images/I/81goNjYUVxL._AC_UL480_FMwebp_QL65_.jpg',
  // };

  // const ThirdBook = {
  //   author: 'Marta Acosta ',
  //   title: 'The Dog Thief',
  //   img: 'https://m.media-amazon.com/images/I/914LSidKp3L._AC_UL480_FMwebp_QL65_.jpg',
  // };

  // const fourthBook = {
  //   author: 'Donna Marchetti ',
  //   title: 'Hate Mail',
  //   img: 'https://m.media-amazon.com/images/I/71mUi+Hd3pL._AC_UL480_FMwebp_QL65_.jpg',
  // }

  // const fifthBook = {
  //   author: 'Steve Frech',
  //   title: 'The Good Husband',
  //   img: 'https://m.media-amazon.com/images/I/81FYBHmfQrL._AC_UL480_FMwebp_QL65_.jpg',
  // }

  // const sixthBook = {
  //   author: 'David J. Gatward ',
  //   title: 'Grimm Up North',
  //   img: 'https://m.media-amazon.com/images/I/71ej80wEbyL._SY466_.jpg',
  // }
  


  return(
    <>
<div className="booklist">

    
   {

     bookShelf.map(bookItems => {
      return(
        <Books key={bookShelf.name} bookDetails = {bookItems}/>
        )

    })

   }

    </div>
</>
  )
}
export default BookList