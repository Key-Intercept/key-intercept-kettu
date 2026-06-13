// This fires instantly upon evaluation, before onLoad!
console.log("[key-intercept] === SCRIPT EVAL START ===");

import plugin from "./kettu";

export const onLoad = plugin.onLoad;
export const onUnload = plugin.onUnload;