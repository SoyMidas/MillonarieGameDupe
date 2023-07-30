import Page from './Pages'

const Menu = (props) => {
  return (
    <>
      {props.type === "Investing" ? (
        <Page title={props.type}/>
      ) : props.type === "Business" ? (
        <Page title={props.type}/>
      ) : props.type === "Earnings" ? (
        <Page title={props.type}/>
      ) : props.type === "Items" ? (
        <Page title={props.type}/>
      ) : props.type === "Profile" ? (
        <Page title={props.type}/>
      ) : (
        <div>404</div>
      )}
    </>
  );
};

export default Menu;
