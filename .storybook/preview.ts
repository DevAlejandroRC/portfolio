import type { Preview } from "@storybook/react";
import i18n from "../src/config/i18n"

i18n.on("languageChanged", (locale) => {
  let direction = i18n.dir(locale);
  document.dir = direction;
})

export const globalTypes = {
  locale: {
    name: "locale",
    toolbar: {
      icon: "globe",
      dynamicTitle: true,
      items: ['en', 'es']
    }
  }
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
