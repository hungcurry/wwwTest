export const useData = () => {
  const useGet = async (url, method = 'GET', params = {}) => {
    const { data, pending, error, refresh } = await useFetch(url, {
      method,
      params,
    });

    watch(data, newValue => {});

    if (data.value === null) {
      return {
        result: data.value,
        error,
      };
    }
    if (data.value) {
      return {
        result: data.value,
        pending,
        refresh,
      };
    }
  };
  const usePost = async (url, body = {}, method = 'POST') => {
    const { data, pending, error, refresh } = await useFetch(url, {
      body,
      method,
    });
    console.log(method);
    if (data.value) {
      return {
        result: data.value,
        pending,
        refresh,
      };
    }
  };
  const usePatch = async (url, body = {}, method = 'PATCH') => {
    const { data, pending, error, refresh } = await useFetch(url, {
      body,
      method,
    });
    if (data.value) {
      return {
        result: data.value,
        pending,
        refresh,
      };
    }
  };
  const useDelete = async (url, method = 'DELETE') => {
    const { data, pending, error, refresh } = await useFetch(url, {
      method,
    });
    if (data.value) {
      return {
        result: data.value,
        pending,
        refresh,
      };
    }
  };
  return {
    useGet,
    usePost,
    usePatch,
    useDelete,
  };
};
