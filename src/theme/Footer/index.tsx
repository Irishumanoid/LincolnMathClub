import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from './styles.module.css';

const CONTACT_EMAIL = 'lincolnmathclubseattle@gmail.com';

export default function Footer(): JSX.Element | null {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {copyright, style} = footer;

  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className={clsx('container container-fluid', styles.footerBottom)}>
        {copyright && (
          <div
            className="footer__copyright"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: copyright}}
          />
        )}
        <a
          className={clsx('button button--secondary button--sm', styles.contactButton)}
          href={`mailto:${CONTACT_EMAIL}`}>
          Contact Us
        </a>
      </div>
    </footer>
  );
}
