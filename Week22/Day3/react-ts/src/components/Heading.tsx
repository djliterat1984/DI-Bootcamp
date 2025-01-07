import React, { ReactNode } from 'react';

type headingProps = {
    title: string;
    subtitle?: string;
};

const Heading = ({ title, subtitle }: headingProps): ReactNode => {
    return (
      <div>
				<h1>{ title }</h1>
				<h2>{ subtitle }</h2>
      </div>
    );
};

export default Heading;
