
const Link = ({text, style, src}) => {
  return (
    <>
      <a href={src} className={style}>{text}</a>
    </>
  )
};

export default Link;
