import Div from "./Div";
import Logo from "./Logo";
import Search from "./Search";
import Link from "./Link";
import Button from "./Button";

const Header = () => {
  function click(){
        window.alert('teste')
    }
  
  return (
    <>
      <header
        className="w-full h-40 bg-neutral-100 flex flex-col 
      px-20 py-5 justify-center"
      >
        <Div style="flex flex-col justify-between items-center bg-sky-500 w-full gap-12 ">
          <Div style="flex flex-row flex-nowrap gap-4 bg-sky-200 w-full justify-between items-center pr-10">
            <Logo style=""
              alt="Logo"
              src="assets\Vector.svg"
              logoName="Digital Store"
              textStyle="font-bold text-3xl text-[rgb(201,32,113)]"
            />  

            <Search style="px-3 py-1 bg-white rounded w-90" 
            nome='searchBar'
            />

            <Link style='font-thin underline underline-offset-3'
            text='Cadastre-se'
            src='#'
            />

            <Button style='rounded bg-[rgb(201,32,113)] px-3 py-1 w-30'
            text='Button'
            onClick={click}
            />
          </Div>

          <Div>menu de baixo</Div>
        </Div>
      </header>
    </>
  );
};

export default Header;
