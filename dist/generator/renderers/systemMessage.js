"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperties(exports, "__esModule", { value: true });
exports.JoinMessage = exports.Highlight = void 0;

const discord_components_react_1 = require("@derockdev/discord-components-react");
const discord_js_1 = require("discord.js");
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../utils/utils");
const { JoinMessage } = require("./systemMessage");

async function renderSystemMessage(message) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  switch (message.type) {
    case discord_js_1.MessageType.RecipientAdd:
    case discord_js_1.MessageType.UserJoin:
      return (react_1.default.createElement(discord_components_react_1.DiscordSystemMessage, { id: `m-${message.id}`, key: message.id, type: "join" }, `Chào mừng ${message.author.displayName} đã tham gia!`));
    case discord_js_1.MessageType.ChannelPinnedMessage:
      return (react_1.default.createElement(discord_components_react_1.DiscordSystemMessage, { id: `m-${message.id}`, key: message.id, type: "pin" },
        react_1.default.createElement(Highlight, { color: (_b = (_a = message.member) === null || _a === void 0 ? void 0 : _a.roles.color) === null || _b === void 0 ? void 0 : _b.hexColor }, message.author.displayName),
        " đã ghim",
        ' ',
        react_1.default.createElement("i", { "data-goto": (_c = message.reference) === null || _c === void 0 ? void 0 : _c.messageId }, "một tin nhắn"),
        " vào kênh này.",
        message.reactions.cache.size > 0 && (react_1.default.createElement(discord_components_react_1.DiscordReactions, { slot: "reactions" }, message.reactions.cache.map((reaction, id) => (react_1.default.createElement(discord_components_react_1.DiscordReaction, { key: `${message.id}r${id}`, name: reaction.emoji.name, emoji: (0, utils_1.parseDiscordEmoji)(reaction.emoji), count: reaction.count })))))));
    case discord_js_1.MessageType.GuildBoost:
    case discord_js_1.MessageType.GuildBoostTier1:
    case discord_js_1.MessageType.GuildBoostTier2:
    case discord_js_1.MessageType.GuildBoostTier3:
      return (react_1.default.createElement(discord_components_react_1.DiscordSystemMessage, { id: `m-${message.id}`, key: message.id, type: "boost" },
        react_1.default.createElement(Highlight, { color: (_e = (_d = message.member) === null || _d === void 0 ? void 0 : _d.roles.color) === null || _e === void 0 ? void 0 : _e.hexColor }, message.author.displayName),
        " đã boost máy chủ!"));
    case discord_js_1.MessageType.ThreadStarterMessage:
      return (react_1.default.createElement(discord_components_react_1.DiscordSystemMessage, { id: `ms-${message.id}`, key: message.id, type: "thread" },
        react_1.default.createElement(Highlight, { color: (_g = (_f = message.member) === null || _f === void 0 ? void 0 : _f.roles.color) === null || _g === void 0 ? void 0 : _g.hexColor }, message.author.displayName),
        " đã bắt đầu một chủ đề: ",
        react_1.default.createElement("i", { "data-goto": (_h = message.reference) === null || _h === void 0 ? void 0 : _h.messageId }, message.content)));
    default:
      return undefined;
  }
}
exports.default = renderSystemMessage;

function Highlight({ children, color }) {
  return react_1.default.createElement("i", { style: { color: color !== null && color !== void 0 ? color : 'white' } }, children);
}
exports.Highlight = Highlight;

const allJoinMessages = [
  '{user} vừa tham gia máy chủ - chúc may mắn!',
  '{user} vừa tham gia. Mọi người hãy tỏ ra bận rộn nào!',
  '{user} vừa tham gia. Có ai hồi máu không?',
  '{user} đã vào nhóm của bạn.',
  '{user} đã tham gia. Bạn cần xây thêm nhà!',
  'Ôi trời. {user} đã xuất hiện.',
  'Chào mừng {user}. Hãy ở lại và trò chuyện nhé.',
  'Chào mừng {user}. Chúng tôi đã chờ bạn ( ͡° ͜ʖ ͡°)',
  'Chào mừng {user}. Hy vọng bạn mang theo pizza.',
  'Chào mừng {user}. Hãy để vũ khí ngoài cửa.',
  '{user} xuất hiện một cách bất ngờ.',
  'Vèo một cái. {user} vừa đáp xuống.',
  'Chuẩn bị tinh thần, {user} vừa tham gia máy chủ.',
  '{user} vừa tham gia. Giấu chuối đi!',
  '{user} vừa đến. Có vẻ mạnh quá - cần giảm sức mạnh.',
  '{user} vừa trượt vào máy chủ.',
  'Một {user} vừa xuất hiện trong máy chủ.',
  '{user} to lớn vừa xuất hiện!',
  "{user} đâu rồi? Đang ở trong máy chủ!",
  '{user} vừa nhảy vào máy chủ. Kangaroo!!',
  '{user} vừa xuất hiện. Giữ lấy bia của tôi.',
  'Đối thủ sắp xuất hiện - {user} đã đến!',
  "Là chim! Là máy bay! Không, chỉ là {user} thôi.",
  "Là {user}! Hãy tôn vinh mặt trời! \\[T]/",
  'Không bao giờ bỏ rơi {user}. Không bao giờ làm {user} thất vọng.',
  'Ha! {user} đã tham gia! Bạn đã kích hoạt lá bài bẫy của tôi!',
  'Chào mừng! {user} đã đến!',
  'Này! Nghe này! {user} đã tham gia!',
  "Chúng tôi đã chờ bạn, {user}",
  "Đi một mình nguy hiểm lắm, hãy mang theo {user}!",
  "{user} đã tham gia máy chủ! Quá hiệu quả!",
  'Chào mừng! {user} đã đến!',
  '{user} đã đến, như lời tiên tri.',
  "{user} đã đến. Bữa tiệc kết thúc rồi.",
  'Người chơi {user} đã sẵn sàng',
  '{user} đến để "đập" và nhai kẹo cao su. Và {user} đã hết kẹo.',
  "Xin chào. Có phải bạn đang tìm {user} không?",
];

function JoinMessage(member, fallbackUser) {
  const randomMessage = allJoinMessages[Math.floor(Math.random() * allJoinMessages.length)];
  return randomMessage
    .split('{user')
    .flatMap((item, i) => {
      var _a, _b;
      return [
        item,
        react_1.default.createElement(Highlight, { color: (_a = member === null || member === void 0 ? void 0 : member.roles.color) === null || _a === void 0 ? void 0 : _a.hexColor, key: i }, (_b = member === null || member === void 0 ? void 0 : member.nickname) !== null && _b !== void 0 ? _b : fallbackUser.displayName),
      ];
    })
    .slice(0, -1);
}
exports.JoinMessage = JoinMessage;