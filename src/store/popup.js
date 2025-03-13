import { reactive } from "vue";

class popupStore {
  constructor(string) {
    this.data = reactive({
      order: false,
      allProducts: false,
    });
  }
  show(name) {
    this.data[name] = true;
  }
  hide(name) {
    this.data[name] = false;
  }
}

export default new popupStore();
