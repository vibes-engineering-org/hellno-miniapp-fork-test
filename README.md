# Vibes Engineering Base MiniKit Template

A vibes engineering mini app built with Next.js that showcases the various actions and capabilities available in MiniKit.

## Features

### Core MiniKit Actions

- **🔍 Environment Detection** - Displays whether the app is running inside a mini app context
- **➕ Add Frame** - Add frames to the Warpcast client
- **✍️ Compose Cast** - Create new casts directly from the mini app
- **👀 View Cast** - Navigate to and view existing casts
- **❌ Close Frame** - Properly close the mini app when needed

## Key Components

Each MiniKit action is implemented as a separate, reusable component:

- **`IsInMiniApp`**: Detects and displays the current environment status
- **`AddFrame`**: Handles adding frames to the Warpcast client
- **`ComposeCast`**: Manages cast composition with pre-filled text
- **`ViewCast`**: Navigates to specific casts using their hash
- **`CloseFrame`**: Provides a way to close the mini app

## Learn More

- [Vibes.Engineering](https://vibes.engineering)
- [MiniKit Documentation](https://base.org/builders/minikit)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Warpcast Developer Resources](https://farcaster.xyz/~/developers)
- [Base Developer Portal](https://base.org/builders)

## Contributing

Feel free to submit issues and pull requests to help improve this repo and documentation.
