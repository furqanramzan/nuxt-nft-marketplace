<script setup lang="ts">
interface InputItem {
  name: string;
  showLabel?: boolean;
  label?: string | false;
  type?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  multiple?: boolean;
  errors?: string[];
  autoComplete?: 'off' | 'username' | 'current-password' | 'new-password';
  rows?: number;
  disabled?: boolean;
}

const props = defineProps<{
  input: InputItem;
  class?: string;
  modelValue?: string | number;
}>();
const emit = defineEmits(['update:modelValue']);

const name = props.input.name;
const min = props.input.min || 0;
const multiple = props.input.multiple || false;
const showLabel = computed(
  () => props.input.showLabel !== false && props.input.type !== 'hidden',
);
const required = computed(() => props.input.required !== false);
const placeholder = computed(
  () => props.input.placeholder || `Type ${name} here`,
);
const rows = computed(() => props.input.rows || 5);
const id = computed(() => props.input.id || name);
const label = computed(
  () => props.input.label || name.charAt(0).toUpperCase() + name.slice(1),
);
const type = computed(() => props.input.type || 'text');
const errors = computed(() => props.input.errors || []);
const hasError = computed(() => errors.value.length > 0);
const classes = `block w-full rounded-lg border text-sm ${
  props.input.errors && props.input.errors.length > 0
    ? 'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500'
    : 'bg-light-secondary text-gray-900 focus:ring-primary-600 dark:bg-dark-secondary dark:text-white dark:placeholder-gray-400 dark:focus:ring-primary-500'
} ${props.class} ${props.input.type === 'file' ? 'cursor-pointer' : ' p-2.5'}`;

const model = ref(props.modelValue);

function onInput({ target }: Event) {
  emit('update:modelValue', (target as HTMLInputElement).value);
}
</script>

<template>
  <div>
    <label
      v-if="showLabel"
      :for="id"
      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >{{ label }}</label
    >
    <input
      v-if="type === 'text'"
      :id="id"
      v-model="model"
      :name="name"
      :min="min"
      :required="required"
      :placeholder="placeholder"
      :multiple="multiple"
      :max="input.max"
      :aria-invalid="hasError"
      :auto-complete="input.autoComplete"
      :class="classes"
      :type="type"
      :disabled="input.disabled"
      @input="onInput"
    />
    <textarea
      v-else-if="type === 'textarea'"
      :id="id"
      v-model="model"
      :rows="rows"
      :name="name"
      :required="required"
      :placeholder="placeholder"
      :aria-invalid="hasError"
      :auto-complete="input.autoComplete"
      :class="classes"
      :disabled="input.disabled"
      @input="onInput"
    ></textarea>
    <ul v-if="hasError" class="mt-2 text-sm text-red-600 dark:text-red-500">
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </div>
</template>
