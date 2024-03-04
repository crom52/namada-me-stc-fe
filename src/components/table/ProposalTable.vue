<template>
  <ATable
    :dataSource="proposalListState"
    :loading="isFetching"
    :scroll="{ x: 1500 }"
    :pagination="false"
    size="small"
  >
    <!-- <template #title>
      <CommonTableHeader
        :currentPage="tableState.currentPage"
        :pageSize="tableState.pageSize"
        :totalRecord="tableState.totalRecord"
        @pageChange="handlePageChange"
        @reload="fetchValidatorList"
      />
    </template> -->

    <ATableColumn
      key="author"
      title="Author"
      :ellipsis="true"
      :width="250"
      fixed="left"
    >
      <template #default="{ record }: {record: API.ProposalItem}">
        <span>{{ record?.content?.authors ?? '-' }}</span>
      </template>
    </ATableColumn>

    <ATableColumn
      key="author-address"
      title="Author Address"
      :minWidth="250"
      :width="250"
      :ellipsis="true"
    >
      <template #default="{ record }: {record: API.ProposalItem}">
        <span class="clickable">{{ record?.author ?? '-' }}</span>
      </template>
    </ATableColumn>

    <ATableColumn
      key="grace_epoch"
      title="Grace"
      align="right"
      :width="150"
    >
      <template #default="{ record }: {record: API.ProposalItem}">
        {{ Number(record?.voting_start_epoch)?.toLocaleString() || '-' }}
      </template>
    </ATableColumn>

    <ATableColumn
      key="voting_start_epoch"
      title="Voting Start"
      align="right"
      :width="150"
    >
      <template #default="{ record }: {record: API.ProposalItem}">
        {{ Number(record?.voting_start_epoch)?.toLocaleString() || '-' }}
      </template>
    </ATableColumn>

    <ATableColumn
      key="voting_end_epoch"
      title="Voting End"
      align="right"
      :width="150"
    >
      <template #default="{ record }: {record: API.ProposalItem}">
        {{ Number(record.voting_end_epoch)?.toLocaleString() || '-' }}
      </template>
    </ATableColumn>
  </ATable>
</template>

<script lang="ts" setup>
import { proposalApis } from '@/apis/proposal/proposal-apis';

const proposalListState = ref<API.ProposalItem[]>([]);
const isFetching = ref<boolean>(false);

const fetchProposalList = async () => {
  isFetching.value = true;

  const response = await proposalApis.search();

  const proposals = response?.value?.list;

  if (!(proposals && proposals.length)) {
    isFetching.value = false;
    return;
  }

  proposalListState.value = proposals;

  isFetching.value = false;
};

fetchProposalList();
</script>
