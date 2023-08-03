import List from "../Layouts/LayoutList";

const MyInteractions = (props) => {
  return (
    <div className="flex flex-col gap-5 h-screen">
      <h1 className="text-3xl font-semibold justify-self-start bg-zinc-200/60 w-fit px-3 py-1 rounded-md ">{props.name}</h1>
      <List
        type={props.type}
        filters={props.filter}
      />
    </div>
  );
};

export default MyInteractions;
