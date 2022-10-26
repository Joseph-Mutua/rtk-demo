const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;
const { fetchUsers } = require("./features/user/userSlice");

console.log("INITIAL STATE", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("UPDATE STATE", store.getState());
});

store.dispatch(fetchUsers());

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());

store.dispatch(icecreamActions.restocked(2));

unsubscribe();
