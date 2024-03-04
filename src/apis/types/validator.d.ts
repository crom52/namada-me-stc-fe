export {};
declare global {
  namespace API {
    type ValidatorPublicKey = {
      type: string;
      value: string;
    }

    type ValidatorItem = {
      address: string;
      pub_key: ValidatorPublicKey;
      voting_power: string;
      proposer_priority: string;
    }
  }
}