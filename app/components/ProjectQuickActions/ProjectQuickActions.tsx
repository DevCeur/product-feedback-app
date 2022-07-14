import { BiPencil, BiShareAlt, BiTrash } from "react-icons/bi";

export const ProjectQuickActions = () => {
  return (
    <div className="w-full p-4 lg:p-6 bg-white flex justify-between items-center rounded-xl">
      <button className="icon-button">
        <BiTrash />
      </button>

      <button className="icon-button">
        <BiPencil />
      </button>

      <button className="icon-button">
        <BiShareAlt />
      </button>
    </div>
  );
};
