import { mount } from "@vue/test-utils";
import Login from "@/components/Login.vue";

describe("Login.vue", () => {
  it("Login Testing", async () => {
    const wrapper = mount(Login);
    const input = wrapper.find("input");

    await input.setValue("my@mail.com");

    expect(input.element.value).toBe("my@mail.com");
  });
});
