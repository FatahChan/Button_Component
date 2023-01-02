import Button from "../components/Button";

export default {
  title: "Example/Button", component: Button,
  argTypes: {
    size: {
      control: {
        type: "select",
        expanded: true,
      },
      options: ["small", "medium", "large"], description: "Size of the button",
    }, type: {
      control: {
        type: "select",
      }, options: ["default", "outline", "text"],
      description: "Type of the button",
    }, color: {
      control: {
        type: "select",

      },
      options: ["primary", "secondary", "danger", "success", "warning", "info"],
      description: "Color of the button",

    }, shadow: {
      control: {
        type: "boolean",
      },
      description: "Show the shadow of the button",
    }, startIcon: {
      control: {
        type: "text",
      },
      description: "Icon to be shown at the start of the button use google icons, accept the name of the icon from https://fonts.google.com/icons?selected=Material+Icons",

    }, endIcon: {
      control: {
        type: "text",
      },
      description: "Icon to be shown at the end of the button use google icons, accept the name of the icon from https://fonts.google.com/icons?selected=Material+Icons",
    }, disabled: {
      control: {
        type: "boolean",
      },
      description: "Disable the button"
    }

  }
}

// only show specific props in the controls panel

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  color: "primary",
  size: "medium",
  type: "default",
  shadow: true,
  startIcon: "",
  endIcon: "",
  disabled: false,
}

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  color: "secondary",
  size: "medium",
  type: "default",
  shadow: true,
  startIcon: "",
  endIcon: "",
}

export const Large = Template.bind({});
Large.args = {
  children: "Button",
  color: "primary",
  size: "large",
  type: "default",
  shadow: true,
  startIcon: "",
  endIcon: ""
}

//type
export const Outline = Template.bind({});
Outline.args = {
  children: "Button",
  color: "primary",
  size: "medium",
  type: "outline",
  shadow: true,
  startIcon: "",
  endIcon: ""
}

export const Text = Template.bind({});
Text.args = {
  children: "Button",
  color: "primary",
  size: "medium",
  type: "text",
  shadow: true,
  startIcon: "",
  endIcon: ""
}

//disabled
export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  color: "primary",
  size: "medium",
  type: "default",
  shadow: true,
  startIcon: "",
  endIcon: "",
  disabled: true
}

//disabled outline

export const DisabledOutline = Template.bind({});
DisabledOutline.args = {
  children: "Button",
  color: "primary",
  size: "medium",
  type: "outline",
  shadow: true,
  disabled: true,
}

//disabled text
export const DisabledText = Template.bind({});
DisabledText.args = {
  children: "Button",
  color: "primary",
  size: "medium",
  type: "text",
  shadow: true,
  disabled: true,
}