'use client'
import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const WidthLimitContainer: FC<Props> =  (props) => {
  return <div className="max-w-[1440px] mx-auto">{props.children}</div>;
};

export default WidthLimitContainer;
