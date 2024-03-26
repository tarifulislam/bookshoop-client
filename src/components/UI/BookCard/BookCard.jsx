/* eslint-disable react/prop-types */
export const BookCard = ({ book }) => {
  return (
    <>
      <div className="card max-w-md w-full bg-base-100 shadow-xl">
        <div className="max-h-52 block pb-6">
          <figure className="max-h-60"><img className="h-100" src={book?.bookCover} alt={book?.title} /></figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{book?.title}</h2>
          <h4 className='text-[#173f5fa9]'>{book?.writter}</h4>
          <p>{book?.description}</p>
          <div className="flex items-center gap-2">

            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}
