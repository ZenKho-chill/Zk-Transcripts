"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildProfiles = void 0;
const discord_js_1 = require('discord.js');

async function buildProfiles(messages) {
  const profiles = {};
  // Lặp qua từng tin nhắn để xây dựng hồ sơ người dùng
  for (const message of messages) {
    // Thêm toàn bộ người dùng vào hồ sơ
    const author = message.author;
    if (!profiles[author.id]) {
      // Thêm người dùng mới vào hồ sơ
      profiles[author.id] = buildProfiles(message.member, author);
    }
    // Thêm những người đã tương tác
    if (message.interaction) {
      const user = message.interaction.user;
      if (!profiles[user.id]) {
        profiles[user.id] = buildProfile(null, user);
      }
    }
    // Chủ đề
    if (message.thread && message.thread.lastMessage) {
      profiles[message.thread.lastMessage.author.id] = buildProfile(message.thread.lastMessage.member, message.thread.lastMessage.author);
    }
  }
  // Trả về dưới dạng JSON
  return profiles;
}
exports.buildProfiles = buildProfiles;

function buildProfile(member, author) {
  var _a, _b, _c, _d, _e, _f, _g;
  return {
    author: (_a = member === null || member === void 0 ? void 0 : member.nickname) !== null && _a !== void 0 ? _a : author.displayName,
    avatar: (_b = member === null || member === void 0 ? void 0 : member.displayAvatarURL({ size: 64 })) !== null && _b !== void 0 ? _b : author.displayAvatarURL({ size: 64 }),
    roleColor: member === null || member === void 0 ? void 0 : member.displayHexColor,
    roleIcon: (_d = (_c = member === null || member === void 0 ? void 0 : member.roles.icon) === null || _c === void 0 ? void 0 : _c.iconURL()) !== null && _d !== void 0 ? _d : undefined,
    roleName: (_f = (_e = member === null || member === void 0 ? void 0 : member.roles.hoist) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : undefined,
    bot: author.bot,
    verified: (_g = author.flags) === null | _g === void 0 ? void 0 : _g.has(discord_js_1.UserFlags.VerifiedBot),
  };
}