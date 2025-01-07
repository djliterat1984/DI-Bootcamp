import React, { type ReactElement, type ReactNode } from 'react';

type sectionProps = {
    children: ReactNode;
    content: string | number;
};

const Section = ({ children, content }: sectionProps): ReactElement => {
    return (
        <>
            <h2>Children:</h2>
            {children}
            {content}
        </>
    );
};

export default Section;
