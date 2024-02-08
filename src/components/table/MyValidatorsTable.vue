<template>
  <ATable :dataSource="data">
    <ATableColumn
      key="validator"
      :ellipsis="true"
      :width="250"
      fixed="left"
    >
      <template #title>
        <span>Validator</span>
      </template>

      <template #default="{ record }: {record: any}">
        <AButton type="link" class="p0">
          {{ record.name }}
        </AButton>
      </template>
    </ATableColumn>
    <ATableColumn
      key="status"
    >
      <template #title>
        <span>Status</span>
      </template>

      <template #default="{ record }: {record: any}">
        <template v-for="tag in record.tags" :key="tag">
          <DynamicStatusTag :status="tag" />
        </template>
      </template>
    </ATableColumn>
    <ATableColumn
      key="amount"
    >
      <template #title>
        <span>Staked Amount</span>
      </template>

      <template #default="{ record }: {record: any}">
        123123123
      </template>
    </ATableColumn>
    <ATableColumn
      key="un-bonded-amount"
    >
      <template #title>
        <span>Unbonded Amount</span>
      </template>

      <template #default="{ record }: {record: any }">
        1231231231231231
      </template>
    </ATableColumn>
    <ATableColumn
      key="withdrawable-amount"
    >
      <template #title>
        <span> Withdrawable Amount</span>
      </template>

      <template #default="{ record }: {record: any}">
        1231231231231231
      </template>
    </ATableColumn>
  </ATable>
</template>

<script lang="ts" setup>
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],

  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
</script>
