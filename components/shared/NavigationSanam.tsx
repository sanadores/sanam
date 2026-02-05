import { INavegationLinksProps } from '@/types/NavigationLinks';
import Link from 'next/link';
import React from 'react';

const NavigationSanam = ({ openNew = false, route = '/', styleDiv, styleSpan, title = '', Icon, styleIcon }: INavegationLinksProps) => {
    if (openNew) {
        return (
            <Link href={route} target="_blank" rel="noopener noreferrer" className={styleDiv}>
                <span className={styleSpan}>{title}</span>
                {Icon && <Icon size={70} className={styleIcon} />}
            </Link>
        );
    } else {
        return (
            <Link href={route}>
                <div className={styleDiv}>
                    <span className={styleSpan}>{title}</span>
                    {Icon && <Icon size={70} className={styleIcon} />}
                </div>
            </Link>
        );
    }
};

export default NavigationSanam;

