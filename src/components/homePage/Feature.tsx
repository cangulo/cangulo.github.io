import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { FeatureItem } from './FeatureItem';
import { SvgBuilder } from '../common/svgBuilder/SvgBuilder';

export function Feature({ title, imageSrc, svgItem, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            {imageSrc && (<div className="text--center">
                <img className={styles.featureSvg} alt={title} src={imageSrc} />
            </div>)}
            {svgItem && (
                <SvgBuilder svgPathD={svgItem.svgPathD} />
            )}
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
