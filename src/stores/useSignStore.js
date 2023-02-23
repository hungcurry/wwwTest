export const SignStore = defineStore('sign', () => {
  // ===================
  // ... form ...
  // ===================
  // sign in
  const useInEmail = ref('');
  const useInPassword = ref('');
  // sign up
  const useName = ref('');
  const useUpEmail = ref('');
  const usePhone = ref('');
  const useDate = ref('');
  const useUpPassword = ref('');
  return {
    useInEmail,
    useInPassword,
    // ------------
    useName,
    useUpEmail,
    usePhone,
    useDate,
    useUpPassword,
  };
});
