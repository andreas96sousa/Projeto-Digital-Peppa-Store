
const Search = ({nome, style}) => {
  return (
    <>
      <input type="search" 
      name={nome} id={nome} 
      placeholder='Buscar' 
      className={style}
      
      />
    </>
  )
};

export default Search;
