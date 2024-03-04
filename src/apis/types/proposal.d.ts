export {};
declare global {
  namespace API {

    type ProposalContentItem = {
      abstract: string;
      authors: string;
      created: string;
      details: string;
      'discussions-to': string;
      license: string;
      motivation: string;
      title: string;
    }

    type ProposalItem = {
      id: number;
      content: ProposalContentItem;
      type: string;
      author: string;
      voting_start_epoch: number;
      voting_end_epoch: number;
      grace_epoch: number;
      votes?: any;
    }
  }
}
