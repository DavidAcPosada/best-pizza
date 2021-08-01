import { ButtonBase, Avatar, Menu, MenuItem } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import clsx from 'clsx'

import changeLanguage from 'lib/utils/changeLanguage';

import useStyles from './styles';

// @ts-ignore
const flags = require.context('static/images/flags', true);

const languages = ['es', 'en'];

const LanguageSelector = ({ className }: { className?: string }) => {
  const { i18n } = useTranslation();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event: any) => setAnchorEl(event.currentTarget);

  const handleMenuClose = () => setAnchorEl(null);

  const handleSelect = async (lng: any) => {
    handleMenuClose();
    await changeLanguage(lng);
  };

  return (
    <>
      <ButtonBase className={clsx(classes.wrapper, className)} onClick={handleMenuClick}>
        <Avatar
          className={classes.avatar}
          src={flags(`./${i18n.language.toUpperCase()}.svg`).default}
        />
      </ButtonBase>

      <Menu
        id='languages'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {languages.map((lng: any) => (
          <MenuItem key={lng} onClick={() => handleSelect(lng)}>
            <img
              src={flags(`./${lng.toUpperCase()}.svg`).default}
              alt={lng}
              width={20}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelector;
