<template>
  <div class="flex items-center">
    <div class="text-nowrap text-spotlight">
      <span class="mr-4">Total:</span>
      <strong class="text-info">{{ totalRecord.toLocaleString() }}</strong>
    </div>

    <AButton
      type="default"
      shape="round"
      size="small"
      class="ml-4 justify-self-center"
      :icon="h(ReloadOutlined)"
      @click="$emit('reload')"
    />

    <div class="ml-auto flex">
      <APagination
        size="small"
        :current="currentPage"
        :total="totalRecord"
        :pageSize="pageSize"
        :showSizeChanger="false"
        @change="$emit('pageChange', { page: $event })"
      />
      <ASelect
        size="small"
        :value="pageSize"
        :options="VIEW_BY_OPTIONS"
        class="hidden md:block"
        @change="$emit('pageChange', { page: 1, pageSize: $event as number })"
      />
    </div>
    <!-- <div class="ml-8">
      <ADropdown trigger="click">
        <template #overlay>
          <AMenu @click="$emit('onSort')">
            <AMenuItem key="create_at">
              <div class="flex items-center gap-5">
                <span>Latest</span>
              </div>
            </AMenuItem>
            <AMenuItem key="update_at">
              <div class="flex items-center gap-5">
                <span>Oldest</span>
              </div>
            </AMenuItem>
          </AMenu>
        </template>
        <AButton size="small">
          Latest
        </AButton>
      </ADropdown>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { ReloadOutlined } from '@ant-design/icons-vue';
import { VIEW_BY_OPTIONS } from '@/constants/common.constant';

const props = defineProps<{
  totalRecord: number;
  currentPage: number;
  pageSize: number;
}>();

defineEmits<{
  reload: [v: void];
  onSort: [v: void];
  pageChange: [v: Partial<Pagination>];
}>();

const { currentPage, totalRecord, pageSize } = toRefs(props);
</script>
