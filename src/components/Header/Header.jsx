import Div from "./Div";
import Logo from "./Logo";


const Header = () => {
  return (
    <>
      <header className='w-full h-40 bg-neutral-100 flex flex-col 
      px-26 py-[2.75] justify-center'>
        <Div style='flex flex-col justify-between items-center bg-sky-500 w-full '>
          <Div className='flex flex-row '>
            <Logo 
            style=''
            alt='Logo'
            src='assets\Vector.svg'
            logoName='Digital Store'
            textStyle='font-bold text-3xl text-[rgb(255, 0, 76)]'
            />
          </Div>
          
            SEARCH
            CADASTRE-SE
            BUTTON
            CART
          <Div>
            menu de baixo
          </Div>
        </Div>






      </header>
    </>
  );
}

export default Header;
