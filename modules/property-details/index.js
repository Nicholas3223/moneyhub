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


const account = {
  uid: "65156cdc-5cfd-4b34-b626-49c83569f35e",
  deleted: false,
  dateCreated: "2020-12-03T08:55:33.421Z",
  currency: "GBP",
  name: "15 Temple Way",
  bankName: "Residential",
  type: "properties",
  subType: "residential",
  originalPurchasePrice: 250000,
  originalPurchasePriceDate: "2017-09-03",
  recentValuation: { amount: 310000, status: "good" },
  associatedMortgages: [
    {
      name: "HSBC Repayment Mortgage",
      uid: "fb463121-b51a-490d-9f19-d2ea76f05e25",
      currentBalance: -175000,
    },
  ],
  canBeManaged: false,
  postcode: "BS1 2AA",
  lastUpdate: "2020-12-01T08:55:33.421Z",
  updateAfterDays: 30,
};

const Detail = ({}) => {
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