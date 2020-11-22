import { FunctionComponent } from 'react';

const ContentWrapper: FunctionComponent = ({ children }) => {
  return <section className="w-2/3 p-8 m-auto">{children}</section>;
};

export default ContentWrapper;
