import Div from "./Div";

const Logo = ({ src, alt, style, logoName, textStyle }) => {

    
  return (
    <>
      <Div style='flex flex-nowrap flex-row justify-center items-center gap-2'>
        <img src={src} alt={alt} className={style} />
        <h1 className={textStyle}>{logoName}</h1>
      </Div>
    </>
  );
};

export default Logo;
