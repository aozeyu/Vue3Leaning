<template></template>

<script>
function getChildrenTextContent(children) {
  return children
    .map((node) => {
      return typeof node.children === "string"
        ? node.children
        : Array.isArray(node.children)
        ? getChildrenTextContent(node.children)
        : "";
    })
    .join("");
} //递归地从子节点获取文本
export default {
  name:'Render',
  render() {
    // create kebab-case id from the text contents of the children
    const headingId = getChildrenTextContent(this.$slots.default())
      .toLowerCase()
      .replace(/\W+/g, "-") // replace non-word characters with dash
      .replace(/(^-|-$)/g, ""); // remove leading and trailing dashes

    return Vue.h("h" + this.level, [
      Vue.h(
        "a",
        {
          name: headingId,
          href: "#" + headingId,
        },
        this.$slots.default()
      ),
    ]);
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
};
</script>