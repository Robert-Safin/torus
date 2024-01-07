import { FC } from "react";

type Props = {
  text: string;
};

const ButtonPrimary: FC<Props> = (props) => {
  return (
    <button className="rounded-full bg-gradient-to-r from-theme-blue to-theme-secondary-blue overflow-hidden w-[250px]">
      <div className="m-[1px] bg-glass-solid rounded-full group-hover:bg-gradient-to-r group-hover:from-theme-blue group-hover:to-theme-secondary-blue transition-all duration-500">
        <p
          className="button py-2 bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-theme-secondary-blue
        group-hover:text-black transition-all duration-500
        "
        >
          {props.text}
        </p>
      </div>
    </button>
  );
};

export default ButtonPrimary;
