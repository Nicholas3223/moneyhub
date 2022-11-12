/* eslint-disable max-statements */
import { add, format } from "date-fns";
import React from "react";
import { Button } from "../../components/button";
import AccountContainer from "../../components/account-container";
import { yearsSincePurchase, purchaseDate } from "./utils/yearsSincePurchase";
import {
  AccountInfoText,
  AccountListItem,
  InfoText,
  Inset,
  ValuationResults,
} from "./style";

const Detail = ({ account }) => {

  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  const sincePurchase = account.recentValuation.amount - account.originalPurchasePrice;
  const sincePurchasePercentage = sincePurchase / account.originalPurchasePrice * 100;
  const annualAppreciation = `${sincePurchasePercentage / yearsSincePurchase(account.originalPurchasePriceDate)}%`;

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
        <AccountListItem>
          <InfoText>Purchased for <strong>£{account.originalPurchasePrice}</strong>{purchaseDate(account.originalPurchasePriceDate)}</InfoText>
        </AccountListItem>
        <AccountListItem>
          <AccountInfoText>
            <InfoText>Since purchase</InfoText>
            <ValuationResults>£{sincePurchase} {`(${sincePurchasePercentage}%)`}</ValuationResults>
          </AccountInfoText>
        </AccountListItem>
        <AccountInfoText>
          <InfoText>Annual appreciation</InfoText>
          <ValuationResults>{annualAppreciation}</ValuationResults>
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
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
