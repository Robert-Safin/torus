'use client'
import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const PaddedContainer: FC<Props> =  (props) => {
  return <div className="px-4 tablet:px-8 pc:px-12">{props.children}</div>;
};

export default PaddedContainer;
