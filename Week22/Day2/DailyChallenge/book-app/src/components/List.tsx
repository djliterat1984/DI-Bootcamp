import { ReactNode } from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

const List = <T extends {}>({ items, renderItem }: ListProps<T>): ReactNode => {
    return <div>{items.map((item): ReactNode => renderItem(item))}</div>;
};

export default List;
