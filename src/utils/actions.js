export const CHANGE_FONT = 'change_font';
export const LOAD_FONT = 'load_font';
export const CHANGE_FONT_FAMILY = 'change_font_family';
export const CHANGE_FONT_VARIATION_SETTINGS = 'change_font_variation_settings';

export const sendMessageToActiveTab = async (message) => {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  const sendMessage = await browser.tabs.sendMessage(tabs[0].id, { message });
  return sendMessage;
};
