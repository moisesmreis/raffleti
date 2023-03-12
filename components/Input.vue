
<template>
    <div>
        <label for="helper-text" class="block mb-2 text-sm font-body font-medium text-neutral-900 dark:text-white">{{ label }}</label>
        <div class="flex">
            <span
                class="inline-flex items-center px-3 text-sm text-neutral-900 bg-neutral-100 border border-r-0 border-neutral-300 dark:bg-neutral-600 dark:text-neutral-400 dark:border-neutral-600">
                <slot></slot>
            </span>
            <input :id="id" :type="type" :placeholder="placeholder" :v-model="modelValue" @input="updateInput"
                class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm font-body focus:ring-[#333333] focus:border-[#333333] block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-[#333333] dark:focus:border-[#333333]" />
        </div>
        <p id="helper-text-explanation" class="mt-2 font-body text-sm text-neutral-500 dark:text-neutral-400">{{ helper }}</p>
    </div>
</template>
  
<script>
export default {
    name: "BaseInput",
    props: {
        label: {
            type: String,
            default: "",
        },
        helper: {
            type: String,
            default: "",
        },
        id: {
            type: String,
            default: "",
        },
        modelValue: {
            type: [String, Number],
            default: "",
        },
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: "",
        },
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        }
    }
};
</script>