/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Cw20ExecuteMsg, Uint128, Binary, Expiration, Timestamp, Uint64, Logo, EmbeddedLogo, InstantiateMsg, Cw20Coin, InstantiateMarketingInfo, MinterResponse, QueryMsg } from "./Cw20FactoryToken.types";
export interface Cw20FactoryTokenReadOnlyInterface {
  contractAddress: string;
  balance: ({
    address
  }: {
    address: string;
  }) => Promise<BalanceResponse>;
  tokenInfo: () => Promise<TokenInfoResponse>;
  minter: () => Promise<MinterResponse>;
  allowance: ({
    owner,
    spender
  }: {
    owner: string;
    spender: string;
  }) => Promise<AllowanceResponse>;
  allAllowances: ({
    limit,
    owner,
    startAfter
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }) => Promise<AllAllowancesResponse>;
  allAccounts: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<AllAccountsResponse>;
  marketingInfo: () => Promise<MarketingInfoResponse>;
  downloadLogo: () => Promise<DownloadLogoResponse>;
}
export class Cw20FactoryTokenQueryClient implements Cw20FactoryTokenReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.balance = this.balance.bind(this);
    this.tokenInfo = this.tokenInfo.bind(this);
    this.minter = this.minter.bind(this);
    this.allowance = this.allowance.bind(this);
    this.allAllowances = this.allAllowances.bind(this);
    this.allAccounts = this.allAccounts.bind(this);
    this.marketingInfo = this.marketingInfo.bind(this);
    this.downloadLogo = this.downloadLogo.bind(this);
  }

  balance = async ({
    address
  }: {
    address: string;
  }): Promise<BalanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      balance: {
        address
      }
    });
  };
  tokenInfo = async (): Promise<TokenInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      token_info: {}
    });
  };
  minter = async (): Promise<MinterResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      minter: {}
    });
  };
  allowance = async ({
    owner,
    spender
  }: {
    owner: string;
    spender: string;
  }): Promise<AllowanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      allowance: {
        owner,
        spender
      }
    });
  };
  allAllowances = async ({
    limit,
    owner,
    startAfter
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }): Promise<AllAllowancesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_allowances: {
        limit,
        owner,
        start_after: startAfter
      }
    });
  };
  allAccounts = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<AllAccountsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_accounts: {
        limit,
        start_after: startAfter
      }
    });
  };
  marketingInfo = async (): Promise<MarketingInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      marketing_info: {}
    });
  };
  downloadLogo = async (): Promise<DownloadLogoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      download_logo: {}
    });
  };
}