/* eslint-disable max-statements */
import { add, format } from "date-fns";
import React from "react";
import { Button } from "../../components/button";
import AccountContainer from "../../components/account-container";
import {
  AccountInfoText,
  AccountListItem,
  InfoText,
  Inset
} from "./style";

const Detail = ({ account }) => {

  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  return (
    <Inset>
      <AccountContainer
        title="Estimated value"
        headline={new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(account.recentValuation.amount)}>
        <AccountListItem><InfoText>
        {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
        </InfoText></AccountListItem>
        <AccountListItem><InfoText>
          {`Next update ${format(
            add(lastUpdate, { days: account.updateAfterDays }),
            "do MMM yyyy"
          )}`}
        </InfoText></AccountListItem>
      </AccountContainer>
      <AccountContainer title="Property details">
        <AccountListItem><InfoText>{account.name}</InfoText></AccountListItem>
        <AccountListItem><InfoText>{account.bankName}</InfoText></AccountListItem>
        <AccountListItem><InfoText>{account.postcode}</InfoText></AccountListItem>
      </AccountContainer>
      <AccountContainer title="Valuation change">
        <AccountListItem><InfoText>Purchased for <strong>£92000</strong> in July 2002</InfoText></AccountListItem>
        <AccountListItem>
          <AccountInfoText>
            <InfoText>Since purchase</InfoText>
            <InfoText>£202883 (220.5%)</InfoText>
          </AccountInfoText>
        </AccountListItem>
        <AccountInfoText>
          <InfoText>Annual appreciation</InfoText>
          <InfoText>13.4%</InfoText>
        </AccountInfoText>
      </AccountContainer>
      {mortgage && (
        <AccountContainer title="Mortgage">
          <AccountListItem>
            <InfoText>
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(
                Math.abs(account.associatedMortgages[0].currentBalance)
              )}
            </InfoText>
          </AccountListItem>
          <AccountListItem><InfoText>{account.associatedMortgages[0].name}</InfoText></AccountListItem>
        </AccountContainer>
      )}
      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
