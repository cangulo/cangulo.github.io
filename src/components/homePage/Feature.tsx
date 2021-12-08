import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { FeatureItem } from './FeatureItem';

export function Feature({ title, imageSrc, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img className={styles.featureSvg} alt={title} src={imageSrc} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
