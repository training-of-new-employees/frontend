import { Link } from 'react-router-dom';

import footerStyles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <nav>
        <ul className={footerStyles.list}>
          <li className={footerStyles.listItem}>Контакты</li>
          <li className={footerStyles.listItem}>Условия и ограничения</li>
        </ul>
      </nav>
      <p className={footerStyles.copypast}>© 2023 QuickOn team</p>
    </footer>
  );
}
