import Icons from "../data/Icons";

const Icon = (props) => {
  const iconExists = Icons.hasOwnProperty(props.name);

  switch (iconExists) {
    case true:
      return (
        <span className="material-symbols-outlined">
          {Icons[props.name]}
        </span>
      );
    case false:
      return (
        <img
          className="aspect-square h-16 drop-shadow-md"
          src={`/assets/${props.name}.svg`}
          alt={`Icono: ${props.name}`}
          loading="lazy"
        />
      )
    default:
      return null;
  }
};

export default Icon;
