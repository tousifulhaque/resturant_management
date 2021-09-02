import { mount } from "@vue/test-utils";
import Login from "@/components/Login.vue";
import { QBtn } from "quasar";

test("Login Testing", async () => {
  const wrapper = mount(Login, { global: { components: QBtn } });
  await wrapper.find("button").trigger("click");
  await wrapper.find("button").trigger("keydown");

  // await input.setValue("my@mail.com");

  // expect(input.element.value).toBe("my@mail.com");
});
