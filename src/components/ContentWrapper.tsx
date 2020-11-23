import { FunctionComponent } from 'react';

const ContentWrapper: FunctionComponent = ({ children }) => {
  return <section className="max-w-screen-lg p-8 m-auto">{children}</section>;
};

export default ContentWrapper;
