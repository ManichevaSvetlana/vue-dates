import { mount } from "vue-test-utils";
import SingleDatePicker from "../src/components/single-date-picker.vue";
import SingleDateController from "../src/components/single-date-controller.vue";

const propsData = {
  id: "date",
  handleDateChange() {},
  handleFocusChange() {}
};

describe("render", () => {
  test("Component is a Vue instance", () => {
    const wrapper = mount(SingleDatePicker, { propsData });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Has a controller", () => {
    const props = { focused: true, ...propsData };
    const wrapper = mount(SingleDatePicker, { propsData: props });
    expect(wrapper.findAll(SingleDateController)).toHaveLength(1);
  });
});
