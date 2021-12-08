import React from 'react';
import { SvgItem } from './SvgItem';
import styles from './SvgBuilder.module.css';


export function SvgBuilder(svg: SvgItem) {
    return (
        <div className={`text--center `} >
            <svg className={styles.customSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d={svg.svgPathD} fill='var(--ifm-color-primary)' />
            </svg>
        </div>
    );
}
