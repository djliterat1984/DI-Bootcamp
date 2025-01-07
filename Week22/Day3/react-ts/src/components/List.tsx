import { ReactElement, ReactNode } from 'react';

type ListProps<T> = {
    items: T[];
};

const List = <T,>({ items }: ListProps<T>): ReactElement => {
    return (
        <>
            <div>List of generic Items</div>
            {items &&
                items.map((item: T, index) => {
                    return <h2 key={index}>{item as ReactNode}</h2>;
				} )
			}
        </>
    );
};

export default List;
