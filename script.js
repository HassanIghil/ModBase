// Set total apps count on page load
document.addEventListener('DOMContentLoaded', () => {
    const statsElement = document.querySelector('[data-stats="apps-count"]');
    if (statsElement) {
        statsElement.textContent = apps.length + '+';  // Dynamically shows total number of apps
    }
});

const apps = [
            {
                id: 1,
                name: 'Pokémon GO',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios'],
                version: 'v0.385.2 MOD',
                size: '205 MB',
                features: ['Joystick', 'Teleport', 'Auto Walk'],
                badges: ['MOD', 'Multi-Platform'],
                image: 'https://assets-prd.ignimgs.com/2021/12/06/pokemongo-logo-1638824992018.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80',
                link: 'https://apkmody.com/games/pokemon-go/download'
            },
            {
                id: 2,
                name: 'Clash of Clans',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios'],
                version: 'v16.0.11 MOD',
                size: '256 MB',
                features: ['Unlimited Gems', 'Unlimited Gold', 'All Troops Unlocked'],
                badges: ['MOD', 'Multi-Platform'],
                image: 'https://wallpapers.com/images/featured-full/clash-of-clans-f88iyeweabo3r6kz.jpg',
                link: 'https://votre-lien-cpa-2.com'
            },
            {
                id: 3,
                name: 'Spotify Premium',
                category: 'premium',
                type: 'Cracked',
                platform: ['android', 'ios', 'pc'],
                version: 'v8.9.12 Premium',
                size: '89 MB',
                features: ['Ad-Free', 'Unlimited Skips', 'Download Music'],
                badges: ['Premium', 'Multi-Platform'],
                image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=200&fit=crop',
                link: 'https://votre-lien-cpa-3.com'
            },
            {
                id: 4,
                name: 'Netflix Premium',
                category: 'premium',
                type: 'Cracked',
                platform: ['android', 'ios', 'pc'],
                version: 'v8.101.0 Premium',
                size: '67 MB',
                features: ['4K Streaming', 'All Content Unlocked', 'Ad-Free'],
                badges: ['Premium', 'Multi-Platform'],
                image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=200&fit=crop',
                link: 'https://votre-lien-cpa-4.com'
            },
            {
                id: 5,
                name: 'PUBG Mobile',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios'],
                version: 'v3.0.0 VIP',
                size: '732 MB',
                features: ['Aimbot', 'ESP', 'No Recoil'],
                badges: ['VIP', 'Multi-Platform'],
                image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=200&fit=crop',
                link: 'https://votre-lien-cpa-5.com'
            },
            {
                id: 6,
                name: 'Instagram++',
                category: 'mod',
                type: 'Modded',
                platform: ['ios'],
                version: 'v312.0 Plus',
                size: '124 MB',
                features: ['Download Media', 'Ghost Mode', 'No Ads'],
                badges: ['Plus', 'Privacy'],
                image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop',
                link: 'https://votre-lien-cpa-6.com'
            },
            {
                id: 7,
                name: 'WhatsApp Plus',
                category: 'mod',
                type: 'Modded',
                platform: ['android'],
                version: 'v18.40 Plus',
                size: '77.55 MB',
                features: ['Custom Themes', 'Hide Online', 'Anti-Delete'],
                badges: ['Plus', 'Privacy'],
                image: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
                link: 'https://inlivku.online/url/_1j8poSSbMvo'
            },
            {
                id: 8,
                name: 'Minecraft PE',
                category: 'games',
                type: 'Cracked',
                platform: ['android', 'ios'],
                version: 'v1.21.120.4 Full',
                size: '853 MB',
                features: ['All Skins Unlocked', 'All Maps', 'Texture Packs'],
                badges: ['Full', 'Unlocked'],
                image: 'https://hogsaddle.com/wp-content/uploads/2020/02/Minecraft-Pocket-Edition-APK.jpg',
                link: 'https://modsfire.com/d/204GZ0P9n1qLrjG'
            },
            {
                id: 9,
                name: 'YouTube Vanced',
                category: 'mod',
                type: 'Modded',
                platform: ['android'],
                version: 'v20.14.43',
                size: '160 MB',
                features: ['No Ads', 'Background Play', 'Dark Mode'],
                badges: ['MOD', 'No Ads'],
                image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
                link: 'https://github.com/vancedapps/vanced.to/releases/download/2025-44/vanced.to_vanced_youtube_v20.14.43_cli5.0.2.2_p5.45.0.6.apk'
            },
            {
                id: 10,
                name: 'Free Fire MAX',
                category: 'games',
                type: 'Modded',
                version: 'v2.118.1 VIP',
                size: '322 MB',
                features: ['Aimbot', 'Wallhack', 'Unlimited Diamonds'],
                badges: ['VIP', 'Anti-Ban'],
                image: 'https://cdn.aptoide.com/imgs/c/3/9/c392496046117cd6930c2b9bdab9372c_icon.png',
                link: 'https://files.5modapk.com/ROOT/All%20Documents%20File/Folder%2015/Garena%20Free%20Fire%20MAX/Free-Fire-MAX-v2.115.1-MOD-OTR-(Getmodsapk.com).xapk'
            },
            {
                id: 11,
                name: 'TikTok++',
                category: 'mod',
                type: 'Modded',
                version: 'v32.5.4 Plus',
                size: '187 MB',
                features: ['Download Videos', 'No Watermark', 'Ghost Mode'],
                badges: ['Plus', 'No Watermark'],
                image: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
                link: 'https://votre-lien-cpa-11.com'
            },
            {
                id: 12,
                name: 'Adobe Photoshop',
                category: 'cracked',
                type: 'Cracked',
                platform: ['pc', 'android', 'ios'],
                version: 'v17.7.12 Full',
                size: '3.4 GB',
                features: ['All Tools Unlocked', 'AI Features', 'Cloud Storage'],
                badges: ['Premium', 'Full'],
                image: 'https://imgcdn.latestmodapks.com/api/resize?url=https://www.latestmodapks.com/wp-content/uploads/2023/06/Photoshop.webp&width=160',
                link: 'https://cdn902.onehost.io/2023/Photoshop_Express_17.7.12_1754191665_latestmodapks.com.xapk'
            },
            {
                id: 13,
                name: 'GTA San Andreas',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios', 'pc'],
                version: 'v2.10 MOD',
                size: '2.4 GB',
                features: ['Unlimited Money', 'All Weapons', 'No Ads'],
                badges: ['MOD', 'Full'],
                image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=200&fit=crop',
                link: 'https://votre-lien-cpa-13.com'
            },
            {
                id: 14,
                name: 'Call of Duty Mobile',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios'],
                version: 'v1.8.52 VIP',
                size: '1.87 GB',
                features: ['Aimbot', 'Wallhack', 'Unlimited CP'],
                badges: ['VIP', 'Anti-Ban'],
                image: 'https://4kwallpapers.com/images/walls/thumbs_3t/22670.jpg',
                link: 'https://dc445.4sync.com/download/2gxYWiDo/Call-Of-Duty-Mobile-VN-v1843-M.apks?tsid=20251106-135419-557a0bd2&sbsr=2f0e298ff21585486cf72d06474e734eb62&bip=NDEuMTQxLjIyNy4xNzM&lgfp=20'
            },
            {
                id: 15,
                name: 'Roblox',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios', 'pc'],
                version: 'v2.614.523 MOD',
                size: '187 MB',
                features: ['Unlimited Robux', 'Speed Hack', 'Fly Mode'],
                badges: ['MOD', 'Premium'],
                image: 'https://t4.ftcdn.net/jpg/04/21/24/77/360_F_421247758_st0YftYSez6gg3x3jP96ih6tIEctyFxg.jpg',
                link: 'https://votre-lien-cpa-15.com'
            },
            {
                id: 16,
                name: 'Genshin Impact',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios', 'pc'],
                version: 'v4.8.0 VIP',
                size: '3.2 GB',
                features: ['Unlimited Primogems', 'God Mode', 'Auto Farm'],
                badges: ['VIP', 'Anti-Ban'],
                image: 'https://play-lh.googleusercontent.com/7qCzAjEpuRo9m6300Kj2LIDHwMPU0F_GxmAbb5QGHLj5CCAHyP3GKxXiPXwUF0v2D5K5Lre2655wrBoxpWY7=w1052-h592-rw',
                link: 'https://votre-lien-cpa-16.com'
            },
            {
                id: 17,
                name: 'Honkai: Star Rail',
                category: 'games',
                type: 'Modded',
                version: 'v2.1.0 MOD',
                size: '4.1 GB',
                features: ['Unlimited Stellar Jade', 'One Hit Kill', 'Unlock All Characters'],
                badges: ['MOD', 'Anti-Ban'],
                image: 'https://upload-os-bbs.hoyolab.com/upload/2025/04/26/17138284/5a93dc391f3b7ab8a57721215b3c9f52_4027212106678723316.jpeg',
                link: 'https://votre-lien-cpa-17.com'
            },
            {
                id: 18,
                name: 'Baldur\'s Gate 3',
                category: 'games',
                type: 'Cracked',
                platform: ['pc'],
                version: 'v4.1.1.3725234',
                size: '122 GB',
                features: ['All DLCs Unlocked', 'Multiplayer Working', 'Latest Updates'],
                badges: ['PREMIUM', 'PC'],
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg',
                link: 'https://votre-lien-cpa-18.com'
            },
            {
                id: 19,
                name: 'Lethal Company',
                category: 'games',
                type: 'Cracked',
                platform: ['pc'],
                version: 'v45.0',
                size: '1.2 GB',
                features: ['Multiplayer Enabled', 'All Items Unlocked', 'Latest Version'],
                badges: ['HOT', 'PC'],
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/1966720/header.jpg',
                link: 'https://votre-lien-cpa-19.com'
            },
            {
                id: 20,
                name: 'FC Mobile 24',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios'],
                version: 'v4.0.1 MOD',
                size: '2.8 GB',
                features: ['Unlimited Coins', 'All Players Unlocked', 'Auto Win'],
                badges: ['NEW', 'VIP'],
                image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/01/3c/4f/013c4f93-a979-c3fe-9c08-2b22b95b9312/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/400x400ia-75.webp',
                link: 'https://votre-lien-cpa-20.com'
            },
            {
                id: 21,
                name: 'Cyberpunk 2077',
                category: 'games',
                type: 'Cracked',
                platform: ['pc'],
                version: 'v2.1 + Phantom Liberty',
                size: '85 GB',
                features: ['DLC Included', 'Ultimate Edition', 'All Patches'],
                badges: ['COMPLETE', 'PC'],
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg',
                link: 'https://votre-lien-cpa-21.com'
            },
            {
                id: 22,
                name: 'Subway Surfers MOD',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios'],
                version: 'v3.15.0',
                size: '175 MB',
                features: ['Unlimited Coins', 'All Characters', 'Anti-Ban'],
                badges: ['POPULAR', 'MOD'],
                image: 'https://play-lh.googleusercontent.com/h1IGEOwaVTlB1Nz3gabKlw7JF3hU3BkH0ZH_R1I2G5IZgLyZU2UWO7vr1Gp2Z3ShFOY=w526-h296',
                link: 'https://votre-lien-cpa-22.com'
            },
            {
                id: 23,
                name: 'Marvel Snap',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios', 'pc'],
                version: 'v23.11 MOD',
                size: '856 MB',
                features: ['Unlimited Credits', 'All Cards Unlocked', 'Max Level'],
                badges: ['VIP', 'UPDATED'],
                image: 'https://cdn1.dotesports.com/wp-content/uploads/2023/03/14153722/marvel-snap-feature.jpg',
                link: 'https://votre-lien-cpa-23.com'
            },
            {
                id: 24,
                name: 'Mortal Kombat 1',
                category: 'games',
                type: 'Cracked',
                platform: ['pc'],
                version: 'v1.5.0 Ultimate',
                size: '115 GB',
                features: ['All Characters', 'All Fatalities', 'Online Mode'],
                badges: ['PREMIUM', 'PC'],
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/1971870/header.jpg',
                link: 'https://votre-lien-cpa-24.com'
            },
            {
                id: 25,
                name: 'Lords Mobile',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios'],
                version: 'v2.83 VIP',
                size: '432 MB',
                features: ['Unlimited Gems', 'VIP Features', 'Speed Ups'],
                badges: ['MOD', 'No Ban'],
                image: 'https://play-lh.googleusercontent.com/8K_TBqld6vzYuYt_TKTq4IXRYgWhYqAKW9QF3uGt7dn61qxqmOXBgQByMxjGh-jvtg',
                link: 'https://votre-lien-cpa-25.com'
            },
            {
                id: 26,
                name: 'Hogwarts Legacy',
                category: 'games',
                type: 'Cracked',
                platform: ['pc'],
                version: 'v1.5.0.1',
                size: '85 GB',
                features: ['All DLCs', 'Deluxe Content', 'No Steam'],
                badges: ['COMPLETE', 'PC'],
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg',
                link: 'https://votre-lien-cpa-26.com'
            },
            {
                id: 27,
                name: 'Stumble Guys',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios', 'pc'],
                version: 'v0.54.1',
                size: '156 MB',
                features: ['All Skins', 'Premium Items', 'No Ads'],
                badges: ['MOD', 'TRENDING'],
                image: 'https://play-lh.googleusercontent.com/PlR-r9z9BQpn4CtkCyCUjrE-_XHGVh65siZJEwQizvxHtInlMHBNHVoqyh6GzY-p4g',
                link: 'https://votre-lien-cpa-27.com'
            },
            {
                id: 28,
                name: 'EA FC 24',
                category: 'games',
                type: 'Cracked',
                platform: ['pc'],
                version: 'v1.5.0',
                size: '45 GB',
                features: ['Online-Fix', 'Ultimate Team', 'All Teams'],
                badges: ['PREMIUM', 'PC'],
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg',
                link: 'https://votre-lien-cpa-28.com'
            },
            {
                id: 29,
                name: 'Cookie Run: Kingdom',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios'],
                version: 'v3.4.102',
                size: '987 MB',
                features: ['God Mode', 'High Damage', 'Auto Win'],
                badges: ['MOD', 'Updated'],
                image: 'https://play-lh.googleusercontent.com/n9c_0x2BO7cQxhnP8tFxv2C_h8K9KGQknFsB9sPF8Db6HgS0_0m0RFQbXrZIf6t6Shs',
                link: 'https://votre-lien-cpa-29.com'
            },
            {
                id: 30,
                name: 'Resident Evil 4 Remake',
                category: 'games',
                type: 'Cracked',
                platform: ['pc'],
                version: 'v1.12',
                size: '67 GB',
                features: ['All DLCs', 'HD Textures', 'Separate Ways'],
                badges: ['COMPLETE', 'PC'],
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg',
                link: 'https://votre-lien-cpa-30.com'
            },
            {
                id: 31,
                name: 'Monopoly GO!',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios'],
                version: 'v1.4.5',
                size: '245 MB',
                features: ['Unlimited Rolls', 'Infinite Money', 'All Tokens'],
                badges: ['HOT', 'MOD'],
                image: 'https://play-lh.googleusercontent.com/YP0cgQ-RQgUtV_EvRwPm2YmOHM84SmYKQB3uXhd_P7AxbMGRU08HP9oSEBOFyvTpkQ',
                link: 'https://votre-lien-cpa-31.com'
            },
            {
                id: 32,
                name: 'Diablo IV',
                category: 'games',
                type: 'Cracked',
                platform: ['pc'],
                version: 'v1.2.3',
                size: '90 GB',
                features: ['Offline Mode', 'All Classes', 'Season Content'],
                badges: ['PREMIUM', 'PC'],
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/2344520/header.jpg',
                link: 'https://votre-lien-cpa-32.com'
            },
            {
                id: 33,
                name: 'Clash Mini',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios'],
                version: 'v1.1534.8',
                size: '325 MB',
                features: ['Unlimited Gold', 'All Minis', 'Max Level'],
                badges: ['NEW', 'MOD'],
                image: 'https://play-lh.googleusercontent.com/KWjH6OuM9ZW2kzVvNQfNvXLaRl_eCxfq5hR1Kj9x1I2FH0N2wFaSrV8n4LDcmpD_QG0',
                link: 'https://votre-lien-cpa-33.com'
            },
            {
                id: 34,
                name: 'Starfield',
                category: 'games',
                type: 'Cracked',
                platform: ['pc'],
                version: 'v1.8.86',
                size: '139 GB',
                features: ['All Updates', 'Constellation Edition', 'Mods Support'],
                badges: ['PREMIUM', 'PC'],
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg',
                link: 'https://votre-lien-cpa-34.com'
            },
            {
                id: 35,
                name: 'Eggy Car',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios'],
                version: 'v2.0.2',
                size: '124 MB',
                features: ['Unlimited Money', 'All Cars', 'No Ads'],
                badges: ['MOD', 'CASUAL'],
                image: 'https://play-lh.googleusercontent.com/e5jZ-of4uQB6xZhy-Ff5VOc9XA8A9VEcZV8sDKFUZu_8bLvLhS7NyKPgDTP2Y9Xw4K0',
                link: 'https://votre-lien-cpa-35.com'
            },
            {
                id: 36,
                name: 'Lies of P',
                category: 'games',
                type: 'Cracked',
                platform: ['pc'],
                version: 'v1.3.0.0',
                size: '52 GB',
                features: ['Deluxe Edition', 'All Weapons', 'Latest Update'],
                badges: ['NEW', 'PC'],
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/1627720/header.jpg',
                link: 'https://votre-lien-cpa-36.com'
            },
            {
                id: 37,
                name: 'Geometry Dash',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios', 'pc'],
                version: 'v2.205',
                size: '186 MB',
                features: ['All Levels Unlocked', 'Custom Songs', 'Practice Mode Bypass'],
                badges: ['POPULAR', 'MOD'],
                image: 'https://play-lh.googleusercontent.com/pUoHfu8huqseNk71Uu9N1DrHBRJBBmNfMaJNDz7Xy0RoQ5Pe0SAT98lzHTLj7YZe2w',
                link: 'https://votre-lien-cpa-37.com'
            },
            {
                id: 38,
                name: 'GTA V',
                category: 'games',
                type: 'Cracked',
                platform: ['pc'],
                version: 'v1.67',
                size: '115 GB',
                features: ['Online Mode', 'All DLCs', 'Mods Support'],
                badges: ['PREMIUM', 'PC'],
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg',
                link: 'https://votre-lien-cpa-38.com'
            },
            {
                id: 39,
                name: 'Valorant',
                category: 'games',
                type: 'Modded',
                platform: ['pc'],
                version: 'v7.12',
                size: '22 GB',
                features: ['Aimbot', 'Wallhack', 'Skin Unlocker'],
                badges: ['VIP', 'Anti-Ban'],
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/2186680/header.jpg',
                link: 'https://votre-lien-cpa-39.com'
            },
            {
                id: 40,
                name: 'Counter-Strike 2',
                category: 'games',
                type: 'Modded',
                platform: ['pc'],
                version: 'v1.39.5.5',
                size: '25 GB',
                features: ['All Skins', 'Inventory Unlocker', 'Cheat Menu'],
                badges: ['PREMIUM', 'Anti-Ban'],
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg',
                link: 'https://votre-lien-cpa-40.com'
            },
            {
                id: 41,
                name: 'Ludo King',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios'],
                version: 'v6.5.0.205',
                size: '42 MB',
                features: ['Always Six', 'Unlimited Coins', 'Theme Unlocked'],
                badges: ['MOD', 'Updated'],
                image: 'https://play-lh.googleusercontent.com/LI_Y_vZZZx4hxEr7YKypwFJBf8TPyxBt8cQtOZFE5zpe_JtoBFO1S7NU9AVqHa4RHs0',
                link: 'https://votre-lien-cpa-41.com'
            },
            {
                id: 42,
                name: 'Parchisi STAR',
                category: 'games',
                type: 'Modded',
                platform: ['android', 'ios'],
                version: 'v3.0.5',
                size: '98 MB',
                features: ['Unlimited Gems', 'Always Win', 'VIP Features'],
                badges: ['MOD', 'No Ban'],
                image: 'https://play-lh.googleusercontent.com/NaFHykh4I7mG9CfOo4f1e8VuGRpRe5nKqXVIE_MtCMEiI_pnpvK5dxZA6fsUozmozA',
                link: 'https://votre-lien-cpa-42.com'
            }
        ];

        let currentApp = null;
        let progress = 0;
        let progressInterval = null;
        let currentCategory = 'all';
        let currentPlatform = 'all';

        // Set the total apps count once when page loads
        document.addEventListener('DOMContentLoaded', () => {
            const statsElement = document.querySelector('[data-stats="apps-count"]');
            if (statsElement) {
                statsElement.textContent = apps.length + '+';
            }
        });

        function renderApps(appsToRender) {
            const grid = document.getElementById('appsGrid');
            grid.innerHTML = appsToRender.map(app => `
                <div class="rounded-xl overflow-hidden shadow-2xl transition-all hover:shadow-green-500/50 hover-scale bg-gray-800 border border-gray-700">
                    <div class="relative h-40 overflow-hidden">
                        <img src="${app.image}" alt="${app.name}" class="w-full h-full object-cover"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                        <div class="absolute top-3 right-3 flex gap-2">
                            ${app.badges.map(badge => `
                                <span class="px-2 py-1 bg-green-500/90 backdrop-blur-sm text-black text-xs font-bold rounded-full shadow-lg">
                                    ${badge}
                                </span>
                            `).join('')}
                        </div>
                        <div class="absolute bottom-3 left-3">
                            <h4 class="text-xl font-bold text-white drop-shadow-lg">${app.name}</h4>
                            <p class="text-xs text-gray-300">${app.version}</p>
                        </div>
                    </div>
                    
                    <div class="p-5">
                        <div class="mb-4 space-y-2">
                            ${app.features.slice(0, 3).map(feature => `
                                <div class="flex items-center gap-2 text-sm text-gray-300">
                                    <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span>${feature}</span>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="flex items-center justify-between mb-4 text-xs text-gray-400">
                            <span>📦 ${app.size}</span>
                            <span>⭐ ${app.type}</span>
                        </div>
                        
                        <button onclick="openModal(${app.id})" class="w-full py-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white font-bold rounded-lg hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                            </svg>
                            Download Free
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function filterPlatform(platform, clickedButton = null) {
            currentPlatform = platform;
            document.querySelectorAll('.platform-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-blue-600', 'text-white');
                btn.classList.add('bg-gray-800', 'text-gray-300');
            });
            
            if (clickedButton) {
                clickedButton.classList.remove('bg-gray-800', 'text-gray-300');
                clickedButton.classList.add('active', 'bg-blue-600', 'text-white');
            }
            
            applyFilters();
        }

        function filterCategory(category, clickedButton = null) {
            currentCategory = category;
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-green-600', 'text-white');
                btn.classList.add('bg-gray-800', 'text-gray-300');
            });
            
            if (clickedButton) {
                clickedButton.classList.remove('bg-gray-800', 'text-gray-300');
                clickedButton.classList.add('active', 'bg-green-600', 'text-white');
            }
            
            applyFilters();
        }

        function applyFilters(searchTerm = '') {
            let filteredApps = apps;
            
            // Filter by platform
            if (currentPlatform !== 'all') {
                filteredApps = filteredApps.filter(app => {
                    // First check if app has explicit platform information
                    if (app.platform && Array.isArray(app.platform)) {
                        return app.platform.includes(currentPlatform);
                    }
                    return false;
                });
            }
            
            // Filter by category
            if (currentCategory !== 'all') {
                filteredApps = filteredApps.filter(app => app.category === currentCategory);
            }
            
            // Apply search filter if there's a search term
            if (searchTerm) {
                filteredApps = filteredApps.filter(app => 
                    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    app.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())) ||
                    app.type.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }
            
            // Filter by category
            if (currentCategory !== 'all') {
                filteredApps = filteredApps.filter(app => app.category === currentCategory);
            }
            
            renderApps(filteredApps);
        }

        function openModal(appId) {
            currentApp = apps.find(a => a.id === appId);
            document.getElementById('modal').classList.remove('hidden');
            document.getElementById('modalTitle').textContent = currentApp.name;
            document.getElementById('modalVersion').textContent = currentApp.version;
            document.getElementById('fileSize').textContent = currentApp.size;
            document.getElementById('extraSteps').textContent = `Enjoy: ${currentApp.features.join(', ')}`;
            
            const badgesHTML = currentApp.badges.map(badge => 
                `<span class="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold">${badge}</span>`
            ).join('');
            document.getElementById('modalBadges').innerHTML = badgesHTML;
            
            document.getElementById('progressSection').classList.remove('hidden');
            document.getElementById('instructionsSection').classList.add('hidden');
            
            startProgress();
        }

        function startProgress() {
            progress = 0;
            progressInterval = setInterval(() => {
                progress += 2;
                updateProgress();
                
                if (progress >= 100) {
                    clearInterval(progressInterval);
                    showInstructions();
                }
            }, 50);
        }

        function updateProgress() {
            const circumference = 2 * Math.PI * 56;
            const offset = circumference * (1 - progress / 100);
            document.getElementById('progressCircle').style.strokeDashoffset = offset;
            document.getElementById('progressText').textContent = progress + '%';
            
            let message = "Preparing download...";
            if (progress >= 33 && progress < 66) message = "Verifying file integrity...";
            if (progress >= 66 && progress < 100) message = "Almost ready...";
            document.getElementById('progressMessage').textContent = message;
        }

        function showInstructions() {
            document.getElementById('progressSection').classList.add('hidden');
            document.getElementById('instructionsSection').classList.remove('hidden');
            
            // Load content locker
            const contentLockerFrame = document.getElementById('contentLockerFrame');
            // Replace 'YOUR_CONTENT_LOCKER_URL' with the actual content locker URL you'll provide
            contentLockerFrame.innerHTML = `<iframe src="YOUR_CONTENT_LOCKER_URL" width="100%" height="100%" frameborder="0"></iframe>`;
            
            // Listen for content locker completion message
            window.addEventListener('message', function(event) {
                // Verify the origin matches your content locker domain
                if (event.data === 'content_locker_complete') {
                    // Show download section when task is completed
                    document.getElementById('downloadSection').classList.remove('hidden');
                }
            });
        }

        function closeModal() {
            const modal = document.getElementById('modal');
            modal.classList.add('hidden');
            if (progressInterval) {
                clearInterval(progressInterval);
            }
            progress = 0;
            document.getElementById('progressSection').classList.remove('hidden');
            document.getElementById('instructionsSection').classList.add('hidden');
            document.getElementById('downloadSection').classList.add('hidden');
        }

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = apps.filter(app =>
                app.name.toLowerCase().includes(searchTerm) ||
                app.type.toLowerCase().includes(searchTerm) ||
                app.features.some(f => f.toLowerCase().includes(searchTerm))
            );
            
            if (currentCategory !== 'all') {
                const categoryFiltered = filtered.filter(app => app.category === currentCategory);
                renderApps(categoryFiltered);
            } else {
                renderApps(filtered);
            }
        });

        // Modal controls
        document.getElementById('closeModal').addEventListener('click', closeModal);
        document.getElementById('downloadBtn').addEventListener('click', () => {
            if (currentApp) {
                window.open(currentApp.link, '_blank');
            }
        });

        // Close modal when clicking outside
        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.id === 'modal') {
                closeModal();
            }
        });

        // Initialize - Render all apps immediately
        renderApps(apps);
