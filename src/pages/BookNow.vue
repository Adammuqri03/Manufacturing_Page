<template>
  <div class="container">
    <div class="q-pa-md form-container">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          label="Email *"
          hint="Example@gmail.com"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Please insert valid information',
          ]"
        />

        <q-input
          filled
          type="number"
          v-model="age"
          label="Quantity *"
          lazy-rules
          :rules="[
            (val) =>
              (val !== null && val !== '') || 'Please insert the quantity',
            (val) => (val > 0 && val < 100) || 'Please insert valid quantity',
          ]"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  max-width: 400px;
  width: 100%;
}
</style>
