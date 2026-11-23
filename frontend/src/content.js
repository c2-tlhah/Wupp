export const links = {
  repository: "https://github.com/hanzalaramz/Wupp",
  releases: "https://github.com/hanzalaramz/Wupp/releases",
  latest: "https://github.com/hanzalaramz/Wupp/releases/latest",
  changelog: "https://github.com/hanzalaramz/Wupp/blob/main/CHANGELOG.md",
  architecture: "https://github.com/hanzalaramz/Wupp/blob/main/ARCHITECTURE.md",
  issues: "https://github.com/hanzalaramz/Wupp/issues",
  discussions: "https://github.com/hanzalaramz/Wupp/discussions",
  license: "https://github.com/hanzalaramz/Wupp/blob/main/LICENSE",
};

export const nav = [
  { label: "Home", path: "" },
  { label: "Features", path: "features/" },
  { label: "Get started", path: "guide/" },
  { label: "Releases", path: "releases/" },
  { label: "About", path: "about/" },
];

export const featureGroups = [
  {
    id: "privacy",
    title: "Privacy & security",
    lead: "Decide what you share, and what stays out of sight.",
    color: "mint",
    items: [
      ["Ghost Mode", "Freeze your last seen and stay hidden while online."],
      [
        "Read & played receipts",
        "Choose whether reading a chat or playing a voice note sends a receipt. Read receipts stay on by default until you change them.",
      ],
      [
        "Typing & recording indicators",
        "Keep typing and voice recording activity quiet.",
      ],
      [
        "Per-chat privacy",
        "Give one chat or group its own read, played, and typing rules.",
      ],
      [
        "Anti-delete archive",
        "Keep locally stored messages and statuses after they are deleted remotely.",
      ],
      [
        "Edit history",
        "Open an edited message to see its earlier local revisions and deletion time.",
      ],
      [
        "Disappearing-message archive",
        "Preserve locally stored messages past their timer when the archive setting is enabled.",
      ],
      [
        "Secret Code & hidden chats",
        "Hide chosen chats from lists and search, and silence their alerts until unlocked.",
      ],
      [
        "App Lock",
        "Protect the app with a device lock or custom PIN and control screenshot access.",
      ],
      [
        "Account privacy settings",
        "Review your profile, last-seen, status, and caller privacy choices from Settings.",
      ],
      [
        "Offline Mode",
        "Pause live sync from Wupp without turning off your phone’s internet.",
      ],
    ],
  },
  {
    id: "chats",
    title: "Chats & conversations",
    lead: "The familiar conversations, with a few more good shortcuts.",
    color: "blue",
    items: [
      [
        "Chats, groups & communities",
        "Follow your existing conversations in the native Android app.",
      ],
      [
        "Channels & statuses",
        "Read channel posts and contact updates, react, reply, and mute channels.",
      ],
      [
        "Pinned messages",
        "Pin a message with a time limit and jump back to it from the chat banner.",
      ],
      [
        "Edit & delete messages",
        "Use long-press actions to edit or delete supported messages, with local revisions kept in history.",
      ],
      [
        "Reply, forward & react",
        "Swipe to reply, use quick emoji reactions, and forward supported messages to up to five chats.",
      ],
      [
        "Reaction choices",
        "Choose the emoji that appear in the quick-reaction bar.",
      ],
      [
        "Chat organization",
        "Pin, mute, archive, favorite, mark read or unread, and clear chats.",
      ],
      [
        "Group mentions",
        "Mention people by name or use a silent @everyone Ghost Mention.",
      ],
      [
        "Contact & group info",
        "Browse members, admin badges, and shared media, documents, and links.",
      ],
      [
        "Status creation & replies",
        "Post your own status and reply to a contact’s story with text or an emoji.",
      ],
      [
        "Chat peek",
        "Preview a conversation from the chat list before opening it.",
      ],
      [
        "Notification quick actions",
        "Reply or mark a message read from its notification when your session is linked.",
      ],
      [
        "Android share target",
        "Share text, photos, videos, audio, and documents into Wupp from other apps.",
      ],
      [
        "Contact names",
        "Use local phonebook names when needed, with an option to prefer them.",
      ],
    ],
  },
  {
    id: "media",
    title: "Media & making things",
    lead: "Find, save, and send the things a conversation is made of.",
    color: "peach",
    items: [
      [
        "Local Media Vault",
        "Browse saved statuses, profile photos, call recordings, and your own folders in one lockable place.",
      ],
      ["Status saver", "Save contact status updates to your phone."],
      [
        "Chat media downloads",
        "Download received photos, videos, audio, and files from chats to your phone.",
      ],
      [
        "Shared media wall",
        "Browse media, documents, and links from Contact or Group Info.",
      ],
      [
        "Gallery visibility",
        "Choose whether saved media appears in your gallery, globally or for one chat.",
      ],
      [
        "Download by network",
        "Set separate automatic media download rules for Wi-Fi, mobile data, and roaming.",
      ],
      [
        "Photo editor",
        "Draw, add text or stickers, rotate, and apply filters before sending.",
      ],
      [
        "Sticker Studio",
        "Turn photos into transparent stickers with cutout, text, and drawing tools.",
      ],
      [
        "Stickers & GIFs",
        "Browse emoji, GIF, and sticker docks; play animated stickers and GIFs; keep favorites.",
      ],
      [
        "Voice notes & documents",
        "Record voice notes, play them in chat, and send or download documents with their filenames.",
      ],
    ],
  },
  {
    id: "calls",
    title: "Calls & alerts",
    lead: "Stay reachable on your terms.",
    color: "lavender",
    items: [
      [
        "Native voice calling",
        "Place and answer encrypted voice calls from Wupp’s linked session.",
      ],
      [
        "Video calling",
        "Make video calls in the app. This feature is beta and can be unstable.",
      ],
      [
        "Call recording",
        "Save in-app call audio locally to your Media Vault when enabled.",
      ],
      [
        "Anti-Call Protection",
        "Silence all calls, decline all calls, or decline unknown callers.",
      ],
      [
        "Double-ring control",
        "Set up calling to avoid ringing both Wupp and the official app.",
      ],
      [
        "Alert controls",
        "Choose notification previews, vibration, conversation sounds, and DM or group alerts.",
      ],
    ],
  },
  {
    id: "appearance",
    title: "Look & feel",
    lead: "A native interface that leaves room for your taste.",
    color: "yellow",
    items: [
      [
        "Material 3 Expressive",
        "Rounded controls, spring motion, and Android-native layouts.",
      ],
      [
        "Liquid Glass surfaces",
        "Frosted navigation and composer surfaces on supported Android versions.",
      ],
      [
        "Themes & color",
        "Choose Light, Dark, AMOLED, iOS Style, and other themes, or use Material You dynamic colors.",
      ],
      [
        "Chat wallpapers",
        "Choose a global wallpaper or one for a specific chat, with dim and doodle controls.",
      ],
      [
        "Fonts & bubbles",
        "Adjust chat font size, choose a font style, and tune bubble shape and color.",
      ],
      [
        "Layout choices",
        "Separate channels or groups, use compact chat rows, and choose a clock format.",
      ],
      ["Language", "Choose the app language from Settings."],
    ],
  },
  {
    id: "accounts",
    title: "Accounts & reliability",
    lead: "Keep the linked connection understandable and in your control.",
    color: "stone",
    items: [
      [
        "Multiple accounts",
        "Link and switch accounts with separate chats, media, and settings.",
      ],
      [
        "QR or phone code linking",
        "Connect through Linked devices in your primary app.",
      ],
      [
        "Local history",
        "Store chat history and downloaded files on your phone for offline browsing.",
      ],
      [
        "Background sync",
        "Keep incoming messages and alerts working with the foreground service and battery setup.",
      ],
      [
        "Primary-phone reminder",
        "Track the 14-day linked-device window and get a warning before it expires.",
      ],
      [
        "In-app GitHub updates",
        "Check releases, opt into previews, and install the correct APK over your existing session.",
      ],
      [
        "Connection safeguards",
        "Space out global sync, batch avatar checks, cache missing photos, and back off on rate limits.",
      ],
      [
        "Unknown-number guard",
        "Wupp blocks a first companion message to an unknown number without local chat history.",
      ],
    ],
  },
];

export const stableHighlights = [
  {
    tag: "v0.3.8",
    date: "2026-11-23",
    title: "A more personal everyday app",
    points: [
      "Multi-account switching and a faster Settings screen",
      "Secret Code for hidden chats, Android sharing, sticker favorites, and GIF playback",
      "Call, media viewer, contact name, and saved-session fixes",
    ],
  },
  {
    tag: "v0.3.7",
    date: "2026-11-22",
    title: "More to make your own",
    points: [
      "New themes, Material You color, custom fonts, and bubble options",
      "Sticker Studio, call recording, and a searchable message history",
      "Anti-Call Protection and a fuller media wall in Chat Info",
    ],
  },
  {
    tag: "v0.3.6",
    date: "2026-11-22",
    title: "A new calling foundation",
    points: [
      "Unified native Rust core and in-app voice calling",
      "Video calling in beta, channel updates, and universal APK builds",
      "Better profile photos, group names, statuses, and media downloads",
    ],
  },
  {
    tag: "v0.3.4",
    date: "2026-11-19",
    title: "Better conversation tools",
    points: [
      "Forwarding, notification quick replies, and local contact names",
      "Offline Mode, screenshot control, and clock format options",
      "Animated sticker and document download fixes",
    ],
  },
  {
    tag: "v0.3.3",
    date: "2026-11-17",
    title: "Create, react, and remember",
    points: [
      "Emoji, GIF, and sticker dock with favorites",
      "Pinned messages, photo editor, and status replies",
      "Contact and group info with shared media",
    ],
  },
  {
    tag: "v0.2.2",
    date: "2026-11-15",
    title: "Smoother everyday chats",
    points: [
      "Chat auto-scroll and a quick jump to the newest message",
      "Clearer background notification and battery settings",
      "Installer guidance for Android’s safety prompt",
    ],
  },
  {
    tag: "v0.1.0",
    date: "2026-11-15",
    title: "The first public Wupp",
    points: [
      "Ghost Mode, local archive, Media Vault, and status saver",
      "Chats, groups, channels, communities, and reactions",
      "QR and phone-code linking with in-app updates",
    ],
  },
];

export const faqs = [
  [
    "Does Wupp replace the official app?",
    "No. Keep the official app installed and signed in on your primary phone. Wupp is a linked companion. The primary app still handles account verification and first chats with unknown numbers.",
  ],
  [
    "Can I use the universal APK on a 32-bit phone?",
    "No. The current native engine is packaged for 64-bit ARM phones (arm64-v8a). The universal APK does not make 32-bit or x86 phones compatible.",
  ],
  [
    "Will I lose my chats when I update?",
    "The in-app updater is designed to install over your current Wupp app without relinking. Keep your existing app data and use the signed release build.",
  ],
  [
    "Where is my history stored?",
    "Wupp keeps chat history, downloaded media, session keys, and settings on your phone. The app does not send telemetry or crash reports to a developer server.",
  ],
  [
    "Is video calling stable?",
    "Video calling is beta and can be unstable. Performance varies by device.",
  ],
  [
    "Can an unofficial client affect my account?",
    "Yes. Using Wupp may violate WhatsApp’s terms and could lead to temporary or permanent account restrictions. Cooldowns and other safeguards reduce noisy activity, but they cannot remove this risk.",
  ],
];
