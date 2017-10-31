export default function (store, router) {
  // simple history management
  const history = window.sessionStorage;
  history.clear();
  let historyCount = history.getItem('count') * 1 || 0;
  history.setItem('/', 0);


  router.beforeEach((to, from, next) => {
    store.commit('updateLoadingStatus', {
      isLoading: true,
    });

    const toIndex = history.getItem(to.path);
    const fromIndex = history.getItem(from.path);

    if (toIndex) {
      if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
        store.commit('updateDirection', {
          direction: 'forward',
        });
      } else {
        store.commit('updateDirection', {
          direction: 'reverse',
        });
      }
    } else {
      historyCount += 1;
      history.setItem('count', historyCount);
      if (to.path !== '/') {
        history.setItem(to.path, historyCount);
      }
      store.commit('updateDirection', {
        direction: 'forward',
      });
    }

    if (/\/http/.test(to.path)) {
      const url = to.path.split('http')[1];

      window.location.href = `http${url}`;
    } else {
      next();
    }
  });

  router.afterEach(() => {
    store.commit('updateLoadingStatus', {
      isLoading: false,
    });
  });
}
