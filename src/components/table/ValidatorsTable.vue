<template>
  <ATable
    :dataSource="tableState.records"
    :loading="isFetching"
    :pagination="false"
    size="small"
  >
    <template #title>
      <CommonTableHeader
        :currentPage="tableState.currentPage"
        :pageSize="tableState.pageSize"
        :totalRecord="tableState.totalRecord"
        @pageChange="handlePageChange"
        @reload="fetchValidatorList"
      />
    </template>

    <ATableColumn
      key="address"
      title="Address"
      :resizable="true"
      :loading="isFetching"
      :ellipsis="true"
      :width="250"
      fixed="left"
    >
      <template #default="{ record }: {record: API.ValidatorItem}">
        {{ record.address }}
      </template>
    </ATableColumn>

    <ATableColumn
      key="voting-power"
      title="Voting Power"
      align="right"
      :width="200"
    >
      <template #default="{ record }: {record: API.ValidatorItem}">
        {{ Number(record.voting_power)?.toLocaleString() || '-' }}
      </template>
    </ATableColumn>
  </ATable>
</template>

<script lang="ts" setup>
import { validatorApis } from '@/apis/validator/validator-apis';

const composeTableState = () => {
  return {
    currentPage: 1,
    pageSize: 50,
    totalRecord: 0,
    records: [] as API.ValidatorItem[],
  };
};

const tableState = reactive(composeTableState());
const isFetching = ref<boolean>(false);

const fetchValidatorList = async (pageInfo: Partial<Pagination> = { page: 1, pageSize: 10 }) => {
  isFetching.value = true;
  const response = await validatorApis.search(pageInfo);

  const fetchResult = response?.data?.result;
  if (!(fetchResult && fetchResult?.validators.length)) {
    return;
  }

  tableState.currentPage = pageInfo?.page || 1;
  tableState.pageSize = pageInfo?.pageSize || 10;
  tableState.records = fetchResult.validators;
  tableState.totalRecord = Number(fetchResult.total) || 0;

  isFetching.value = false;
};

const handlePageChange = (pageChanged: Partial<Pagination>) => {
  fetchValidatorList(pageChanged);
};

fetchValidatorList({ pageSize: 50 });
</script>
