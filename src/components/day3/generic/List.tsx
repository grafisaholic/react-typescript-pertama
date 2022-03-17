type ListProps<Item> = {
  items: Item[],
  onClick: (value : Item) => void
}

/**
 * extends object type beside from param type
 * extends can be spesifit key in object like { id : number }
 */
function List<Item extends {}>({ items, onClick } : ListProps<Item>) {
  return (
    <div>
      <h2>List of items :</h2>
      {items.map((i, index) => (
        <button 
          key={index}
          className='bg-transparent hover:bg-blue-500 text-blue-700 px-4 h-8 border border-blue-500 hover:text-white rounded-md hover:border-transparent m-2'
          onClick={() => onClick(i)}
        >
          {i}
        </button>
      ))}
    </div>
  )
}

export default List