
const Header = ({children, style}) => {
  return (
    <>
      <header className={style}>
        {children}
      </header>
    </>
  );
}

export default Header;
