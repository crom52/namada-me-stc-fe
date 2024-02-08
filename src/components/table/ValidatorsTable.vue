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
        <AButton
          type="link"
          class="p0"
        >
          {{ record.name }}
        </AButton>
      </template>
    </ATableColumn>
    <ATableColumn
      key="status"
    >
      <template #title>
        <span>Voting power</span>
      </template>

      <template #default="{ record }: {record: any}">
        <template
          v-for="tag in record.tags"
          :key="tag"
        >
          <DynamicStatusTag :status="tag" />
        </template>
      </template>
    </ATableColumn>
    <ATableColumn
      key="amount"
    >
      <template #title>
        <span>Commission</span>
      </template>

      <template #default="{ record }: {record: any}">
        10.2%
      </template>
    </ATableColumn>
  </ATable>
</template>

<script lang="ts" setup>
const data = [{
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
