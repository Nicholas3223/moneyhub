import React from 'react';
import PropTypes from "prop-types";
import {
  AccountHeadline,
  AccountLabel,
  AccountList,
  AccountSection,
} from "../modules/property-details/style";

const AccountContainer = ({ children, title, headline }) => {
  return (
    <AccountSection>
      <AccountLabel>{title}</AccountLabel>
      {headline && <AccountHeadline>{headline}</AccountHeadline>}
        <AccountList>
          {children}
        </AccountList>
    </AccountSection>
  );
};

AccountContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  headline: PropTypes.string,
}

export default AccountContainer;